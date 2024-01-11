import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperone = document.querySelector('swiper1');
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  breakpoints: {
       
    
    380: {
      slidesPerView: 2,
      spaceBetweenSlides: 26
  },
   700: {
        slidesPerView: 3,
        spaceBetweenSlides: 30
    }
,
    1200:{
        slidesPerView: 4,
        spaceBetweenSlides: 30
    }
},
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

  // Enable debugger
  debugger: true,
});



import {api_key} from "../features/auth/auth.js";
import {fetchDataFromApi,imageBaseUrl} from "../features/auth/fetch.js";
import { getMovieId, getSeriesId } from '../js/global.js';

const personId = localStorage.getItem('personId');

if(personId == undefined){
  alert('No details about this person')

}else{




const component_one = document.querySelector("#component-one");
const component_one_content = component_one.querySelector("picture");




//get me the results key-value from the data object
const aboutPerson = function (personData){

    
const {
name,
biography,
profile_path

	} = personData

  document.title = `${name} - Saintstream movies`

component_one_content.innerHTML = `
<img src="${imageBaseUrl}/w500/${profile_path}" class="rounded-10px" alt="${name}">
<div class="text-white h-full flex flex-col justify-between">
    <span>
        <h3 class="text-left font-serif-two font-bold text-white capitalize text-xs">${name}</h3>
        <h2 class="font-serif-two font-light text-white text-left text-1xl capitalize">biography</h2>
    </span>
    <p class="font-serif-two font-light text-white text-left text-base leading-22">${biography}</p>
</div>

`
   
}





fetchDataFromApi(`https://api.themoviedb.org/3/person/${personId}?api_key=${api_key}&page=1`, aboutPerson);










const component_two = document.querySelector("#component-two");
const component_two_wrapper = component_two.querySelector(".swiper-wrapper");

   
  function movieCredit({cast : creditData}){
    
  
      //Incase it can't find anything
      if(creditData.length ==0){
        return;
           
    }else{
    
     creditData.forEach((credit,index)=>{
    
      if(index < 10){
       
      const {
      poster_path,
      original_title,
      original_language,
      vote_average,
       id,
       
      
    } = credit

    


     
const swiperOneSlide = document.createElement('picture');
swiperOneSlide.classList.add('swiper-slide', 'swiper-slide-one');


   swiperOneSlide.innerHTML = `
   <a href="./about-movie.html">
   <img class="rounded-10pxobject-cover object-center" loading="eager" src="${poster_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${poster_path}`}" alt="${original_title}">

   <div class="poster-content flex flex-col gap-12">
   <span>
       <p class="text-gray-50 text-1xl capitalize font-serif-two leading-32 font-bold">${original_title}</p>
   </span>
   
   <span class="flex gap-4 items-center">
   <span class="flex gap-4 items-center">
       <i class="fa-solid fa-star text-yellow icon-small"></i>
       <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
   </span>

   <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
          <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${original_language}</p>
   </span>
   </span>
</div>
</a>
  
   `;
   
        component_two_wrapper.appendChild(swiperOneSlide); 

        swiperOneSlide.addEventListener('click', ()=>{
          getMovieId(id);
         });
  } else{
    return;
  }
      });
}
  }





fetchDataFromApi(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${api_key}&page=1`, movieCredit);





function seriesCredit({cast : creditData}){
    
  
  //Incase it can't find anything
  if(creditData.length ==0){
    return;
       
}else{

 creditData.forEach((credit,index)=>{

  if(index < 10){
    
  const {
  poster_path,
  name,
  original_language,
  vote_average,
   id,
   
  
} = credit




 
const swiperOneSlide = document.createElement('picture');
swiperOneSlide.classList.add('swiper-slide', 'swiper-slide-two');
/**I had to change the classs name here to swiper-slide-two for the action listener to work properly */


swiperOneSlide.innerHTML = `
<a href="./about-series.html">
<img class="rounded-10px object-cover object-center" loading="eager" src="${poster_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${poster_path}`}" alt="${name}">

<div class="poster-content flex flex-col gap-12">
<span>
   <p class="text-gray-50 text-1xl capitalize font-serif-two leading-32  font-bold">${name}</p>
</span>

<span class="flex gap-4 items-center">
<span class="flex gap-4 items-center">
   <i class="fa-solid fa-star text-yellow icon-small"></i>
   <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
</span>

<span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
      <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${original_language}</p>
</span>
</span>
</div>
</a>

`;

    component_two_wrapper.appendChild(swiperOneSlide); 

    swiperOneSlide.addEventListener('click', ()=>{
      getSeriesId(id);
     });
} else{
return;
}
  });
}
}



fetchDataFromApi(`https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${api_key}&page=1`, seriesCredit);


 

}