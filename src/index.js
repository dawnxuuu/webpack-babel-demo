import axios from 'axios';

async function component() {
  var element1 = document.createElement('div')
  element1.innerHTML = 'Fetching'
  document.body.appendChild(element1)
  

  const res = await axios.get('https://api.github.com/repos/vuejs/vue')
  console.log(JSON.stringify(res))

  if (res.status === 200) {
    console.log(res.data.stargazers_count)
  } else {
    var element3 = document.createElement('div')
    element3.innerHTML = 'Fetching error'
    document.body.appendChild(element3)
  }

  var element2 = document.createElement('div')
  element2.innerHTML = 'Vue.js in Github Star Count: ' + `${res.data.stargazers_count}`
  document.body.appendChild(element2)
}

component()