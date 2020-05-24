let pageOneBtn = document.querySelector('#page1-btn');
let pageTwoBtn = document.querySelector('#page2-btn');
let pageThreeBtn = document.querySelector('#page3-btn');
let pageFourBtn = document.querySelector('#page4-btn');

let page1 = document.querySelector("#page-one");
let page2 = document.querySelector("#page-two");
let page3 = document.querySelector("#page-three");
let page4 = document.querySelector("#page-four");

function hideAllPages() {

  page1.classlist.add('hidden');
  page2.classlist.add('hidden');
  page3.classlist.add('hidden');

  page1.classlist.add('show');
  page2.classlist.add('show');
  page3.classlist.add('show');
}




pageOneBtn.addEventListener('click', async function(){
  let response = await axios.get 
  ('page1.html');
  page1.innerHTML = response.data;
  page1.classList.add('show');
  page1.classList.remove('hidden');
})

pageTwoBtn.addEventListener('click', async function(){
  hideAllPages;
  let response = await axios.get
  ('page2.html');
  page2.innerHTML = response.data;
  page2.classList.add('show');
  page2.classList.remove('hidden');
})