import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] , disabled:false};
  }

  render() {
    return (
    <div align='center'>
      <h1>Get your bit.ly links' clicks count</h1>
      <input type="text" placeholder="Enter bit.ly access token" />
      <button disabled={this.state.disabled}>Get links clicks count</button>
      <div align='left' id="result"></div>
    </div>
    );
  }

  componentDidMount() {
    loadComponents();
  }
}
let button, subInput, result,links;
function loadComponents() {
  button = document.querySelector('button');
  subInput = document.querySelector('input');
  result = document.querySelector('#result');

  button.addEventListener('click', () => {
    button.disabled=true;
    fetchLinks(subInput.value);
    
  });
}
async function renderList(json, accessToken) {
  links = json.data.link_history;
  let element = []
  for (let index = 0; index < links.length; index++) {
     element[index] =`<li>Title: ${links[index].title} Link: <a href="${links[index].link}">${links[index].link}</a> Clicks: ${await (fecthClicks(links[index].link,accessToken))}</li>`;
  }  
  return `<ol>
    ${element.join("")}
  </ol>`;

}
async function fecthClicks(link, accessToken) {
  const URL = `https://api-ssl.bitly.com/v3/link/clicks?access_token=${accessToken}&format=json&limit=100&link=${link}`
  try {
    const fetchResult = fetch(URL, { method: 'GET', cache: 'reload', mode: 'cors' });
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      const linkData = await jsonData.data;
      const clicks = await linkData.link_clicks;
      return JSON.stringify(clicks);
    } else {
      return "N/A"
    }
  } catch (e) {
    console.error(e);
  }
}

async function fetchLinks(accessToken) {
  result.innerHTML = `Gathering Data... </br> Please wait.`;
  const URL = `https://api-ssl.bitly.com/v3/user/link_history?access_token=${accessToken}&format=json&limit=100`;
  try {
    const fetchResult = fetch(new Request(URL, { method: 'GET', cache: 'reload' }), { mode: 'cors' });
    const response = await fetchResult;
    if (response.ok) {
      const jsonData = await response.json();
      result.innerHTML = await renderList(jsonData, accessToken);
      button.disabled=false;
    } else {
      result.innerHTML = `Response.status: ${response.status}`;
      button.disabled=false;
    }
  } catch (e) {
    result.innerHTML = e;
  }
}

export default App;
