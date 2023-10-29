var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:3000,
  },
  allowTouchMove:true,
  loop:true,
});

const navList = document.querySelector (".nav__list")
const navBurger = document.querySelector (".nav__burger")
navBurger.addEventListener ("click", ()=>{
  navList.classList.toggle("active")
  navBurger.classList.toggle("active")
})

// tabs


const tabsBtn = document.querySelectorAll (".work__btn")
const tabsItem = document.querySelectorAll (".tab-content")
tabsBtn.forEach(clickTab)
function clickTab (item){
  item.addEventListener("click", function(){
    let currentBtn = item
    let tabId = currentBtn.getAttribute ("data-tab")
    let currentTab = document.querySelector (tabId)


    if (!currentBtn.classList.contains("active")){
      tabsBtn.forEach(function(btn){
        btn.classList.remove("active")
      })

      tabsItem.forEach(function(item){
        item.classList.remove("active")
      })

      currentBtn.classList.add("active")
      currentTab.classList.add("active")

    }

  })
}

document.querySelector (".work__btn").click()

const search = document.querySelector(".search")
const searchBtn = document.querySelector(".header__btn")
const clear = document.querySelector(".search__clear")
searchBtn.addEventListener ('click',()=>{
  search.classList.add('open')
  searchBtn.classList.add('open')
  clear.classList.add('open')
})



clear.addEventListener ('click',()=>{
  search.classList.remove('open')
  searchBtn.classList.remove('open')
  clear.classList.remove('open')
  document.getElementById('input').value = ''
})

// accordion

const accordion = document.querySelectorAll ('[data-collapse]')
accordion.forEach ((question,index) => {
  accordion [index].addEventListener('click',() => {
    question.classList.toggle("active")
  })
})



