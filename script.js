let pageOneBtn = document.querySelector("#page1-btn");
let pageTwoBtn = document.querySelector('#page2-btn');
let pageThreeBtn = document.querySelector('#page3-btn');


let page1 = document.querySelector("#page-one");
let page2 = document.querySelector("#page-two");
let page3 = document.querySelector("#page-three");


function hideAllPages() {

  page1.classList.add('hidden');
  page2.classList.add('hidden');
  page3.classList.add('hidden');

  page1.classList.remove('show');
  page2.classList.remove('show');
  page3.classList.remove('show');

}



pageOneBtn.addEventListener('click', async function(){
hideAllPages();
let response = await axios.get('page-one.html');
page1.innerHTML= response.data;
page1.classList.add('show');
page1.classList.remove('hidden');

})


pageTwoBtn.addEventListener('click', async function(){
  hideAllPages();
  let response = await axios.get('page2.html');
  page2.innerHTML = response.data;
  page2.classList.add('show');
  page2.classList.remove('hidden');
})

pageThreeBtn.addEventListener('click', async function(){
  hideAllPages();
  let response = await axios.get('page3.html');
  page3.innerHTML = response.data; 
  page3.classList.add('show');
  page3.classList.remove('hidden');
})

window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    console.log("registering the service worker");
    navigator.serviceWorker.register('./sw.js')
  }
}