
/**
 * I am trying to implement a loader before the page finishes loading, but sadly for me it makes
 * it kinda look worse
 */

// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
        
//         document.querySelector(
//             "main").style.visibility = "hidden";
            
//         document.querySelector(
//             "#loader").style.visibility = "visible";
//     } else {
//         document.querySelector(
//             "#loader").style.display = "none";
//         document.querySelector(
//             "main").style.visibility = "visible";
//     }
// };


const navLinks = document.querySelectorAll(".nav-link");

    
navLinks.forEach((navLink)=>{
    
  
    if(navLink.href === window.location.href +"#"){
        navLink.classList.add("current-page");
        console.log(navLink.href);
    } else if (navLink.href === window.location.href)  {
        navLink.classList.add("current-page");
        console.log(navLink.href);
    }

});




const nav = document.querySelector('nav')
window.addEventListener('scroll', ()=>{
    nav.classList.toggle('fixed-item', window.scrollY >45);
        
  });

//responsive menu
const menu = document.querySelector('ul');
const menuBtn = document.querySelector('.menu-btn');
const menuHolder =Array.from(document.querySelector('ul').children);


menuBtn.addEventListener('click', ()=>{
    if(menuBtn.className.includes('fa-bars')){
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-xmark')
        menu.classList.add('show-menu')
    } else{
        menuBtn.classList.remove('fa-xmark')
        menuBtn.classList.add('fa-bars');
        menu.classList.remove('show-menu');
       
    }
});


menuHolder.forEach((menuitem)=>{

    menuitem.addEventListener('click', ()=>{
        menu.classList.remove('show-menu');
        menuBtn.classList.remove('fa-xmark')
        menuBtn.classList.add('fa-bars');
    });

    
   
});


const startSearch = document.querySelector('.search-toggle');
const cancelSearch = document.querySelector('.cancel-search');
const searchContainer = document.querySelector('.search-container');
const helpSearch = document.querySelectorAll('.help-search');
const icons_container = document.querySelector('.icons-container');











startSearch.addEventListener('click', ()=>{
    searchContainer.classList.add('showSearch');
    startSearch.classList.add('hide-them');
    icons_container.classList.add('center-it');
    helpSearch.forEach(ele=>{
     ele.classList.add('hide-them');
    });

    
const form = document.querySelector('.form');
const searchText = form.querySelector('#search-text');
console.log(form);


form.addEventListener('submit', ()=>{
 
    const text = searchText.value.trim();
    
     localStorage.setItem('searchQuery', text);
     
    
   

    
});

});


// function getSearchText(){
    
//  text = searchText.value.trim();
//  console.log(text);
//  localStorage.setItem('searchText', text)
//  }

cancelSearch.addEventListener('click', ()=>{
    searchContainer.classList.remove('showSearch');
    icons_container.classList.remove('center-it');
    startSearch.classList.remove('hide-them');
    helpSearch.forEach(ele=>{
        ele.classList.remove('hide-them');
       });
});


 export const getMovieId = function (movieid){
localStorage.setItem("movieId", String(movieid));
}

export const getSeriesId = function (seriesid){
localStorage.setItem("seriesId", String(seriesid));
}


export const getpersonId = function (personid){
    localStorage.setItem("personId", String(personid));
    }

