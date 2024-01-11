// swiper.js
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'



var swiper1 = new Swiper('.swiper1', {
   keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination1',
    clickable: true,
  },
   navigation: {
     nextEl: '.swiper-button-next1',
     prevEl: '.swiper-button-prev1',
   },

  // Enable debugger
  debugger: true,
});


var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
       
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
       

        380: {
          slidesPerView: 1,
          spaceBetweenSlides: 16
      },
       700: {
            slidesPerView: 2,
            spaceBetweenSlides: 24
        }
,
        1200:{
            slidesPerView: 3,
            spaceBetweenSlides: 28
        }
    }
    ,
  // Enable debugger
  debugger: true,
 });


  var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 30,
   
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        
        640: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        
        900: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
,
        1200:{
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
    }
    ,
  // Enable debugger
  debugger: true,
  });


  var swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 30,
   
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
       

      380: {
        slidesPerView: 1,
        spaceBetweenSlides: 16
    },
     700: {
          slidesPerView: 2,
          spaceBetweenSlides: 24
      }
,
      1200:{
          slidesPerView: 3,
          spaceBetweenSlides: 24
      }
  }
  ,
  
  

  // Enable debugger
  debugger: true,
  });
  

  var swiper5 = new Swiper('.swiper5', {
    slidesPerView: 1,
    spaceBetween: 30,
   
     pagination: {
       el: '.swiper-pagination5',
       clickable: true,
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 499px
        640: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        900: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
,
        1200:{
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
   },
    
  // Enable debugger
  debugger: true
  });


  
  var swiper6 = new Swiper('.swiper6', {
    slidesPerView: 1,
    spaceBetween: 30,
   
     pagination: {
       el: '.swiper-pagination6',
       clickable: true,
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 499px
        640: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        900: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
,
        1200:{
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
   },
    
  // Enable debugger
  debugger: true,
  });


  var swiper7 = new Swiper('.swiper7', {
    slidesPerView: 1,
    spaceBetween: 30,
   
     pagination: {
       el: '.swiper-pagination7',
       clickable: true,
     },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is <= 499px
        640: {
            slidesPerView: 2,
            spaceBetweenSlides: 30
        },
        // when window width is <= 999px
        900: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        }
,
        1200:{
            slidesPerView: 4,
            spaceBetweenSlides: 30
        }
   },
    
  // Enable debugger
  debugger: true,
  });
  


// Render pages
//

import {api_key} from "../features/auth/auth.js";
import {fetchDataFromApi,imageBaseUrl} from "../features/auth/fetch.js";
import {getMovieId, getSeriesId} from '../js/global.js';


const swiperOne = document.querySelector(".swiper1");
const swiperWrapperOne = swiperOne.querySelector(".swiper-wrapper");


//get me the results key-value from the data object
const bigPoster = function ({results : movieList}){


	for(const [index, movie] of movieList.entries()){

    //gets me exactly what I need
const {
	backdrop_path,
	title,
	release_date,
	original_language,
	overview,
  id
	} = movie

const swiperOneSlide = document.createElement('picture');
swiperOneSlide.classList.add('swiper-slide', 'swiper-slide-one');

/**
 * I kinda find it weird that I can access elements in the movie object without a object['key']
 * or object.key method....
 * Maybe nha me no sabi javascript
 */
swiperOneSlide.innerHTML = (`

<img class="main-picture w-full h-full object-center object-cover absolute" loading= ${index === 0 ? "eager" : "lazy"} src = "${imageBaseUrl}/w1280/${backdrop_path}" alt="${title}">
<div class="movie-content absolute flex flex-col gap-15">
<h3 class="text-sm font-serif-two font-medium text-white bg-black-800 px-16 py-4 rounded-16px w-fit" >${release_date.substring(0, release_date.indexOf('-'))}</h3>
<h2 class="text-left font-serif-two font-bold text-white capitalize">${title}</h2>
<span class="tiny-dots text-white flex">
    <p class="w-fit font-serif-two font-medium text-little text-gray">${release_date.substring(0, release_date.indexOf('-'))}</p>
    <p class="w-fit  font-serif-two font-medium text-little text-gray">${original_language}</p>
</span>
<p class="text-base font-serif-two font-light text-white text-left">${overview}</p>
<span>
  <a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm font-bold font-serif-one w-fit leading-22"  href="./views/about-movie.html"><i class="fa-regular fa-circle-play"></i>learn more</a>
       
</span>

</div>

`);
     swiperWrapperOne.appendChild(swiperOneSlide);
     //I couldn't use the onclick function so I had to hack this together instead
     swiperOneSlide.querySelector('a').addEventListener('click', ()=>{
      getMovieId(id);
     });
};

};



fetchDataFromApi(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`, bigPoster);






const logos_container = document.querySelector('picture.logos');

logos_container.innerHTML = 
(
`<img src="./assets/images/logo/disney.svg" alt="brand logo">
<img src="./assets/images/logo/tmdb-logo.svg" alt="brand logo">
<img src="./assets/images/logo/netflix-3.svg" alt="brand logo">
<img src="./assets/images/logo/tmdb-logo.svg" alt="brand logo">
<img src="./assets/images/logo/pixar_logo.svg"  alt="brand logo">
<img src="./assets/images/logo/tmdb-logo.svg" alt="brand logo">
`);







const swiperTwo = document.querySelector(".swiper2");
const swiperWrapperTwo = swiperTwo.querySelector(".swiper-wrapper");

const poster2 = function({results: movieList}){
   
 
  
  movieList.forEach(movie=>{
    
   //gets me exactly what I need
   const {
    poster_path,
    title,
    release_date,
    original_language,
    vote_average,
    id
    
    
  } = movie;

  

const swiperTwoSlide = document.createElement('picture');
swiperTwoSlide.classList.add('swiper-slide', 'swiper-slide-two');

swiperTwoSlide.innerHTML = 
(`
<a href="./views/about-movie.html">
<img class="rounded-10px object-cover object-center" loading="eager" src="${imageBaseUrl}/w500/${poster_path}" alt="${title}">

<div class="poster-content flex flex-col gap-12">
<span>
    <p class="text-gray-50 text-1xl capitalize font-serif-two leading-32 font-bold">${title}</p>
</span>

<span class="flex gap-4 items-center">
<span class="flex gap-4 items-center">
    <i class="fa-solid fa-star text-yellow icon-small text-center "></i>
    <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
</span>

<span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize items-center">
    <p class="font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
    
</span>
</span>
</div>
</a>

`);
swiperWrapperTwo.appendChild(swiperTwoSlide);
swiperTwoSlide.addEventListener('click', ()=>{
  getMovieId(id);
 });

  });
}


fetchDataFromApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&page=1`, poster2);



const swiperThree = document.querySelector(".swiper3")
const swiperWrapperThree = swiperThree.querySelector(".swiper-wrapper");

const poster3 = function({results: movieList}){
  for(const [index, movie] of movieList.entries()){
    
   //gets me exactly what I need
   const {
    poster_path,
    title,
    adult,
    release_date,
    original_language,
    vote_average,
    id
    
    
  } = movie;

  
const swiperThreeSlide = document.createElement('picture');
swiperThreeSlide.classList.add('swiper-slide', 'swiper-slide-three');

swiperThreeSlide.innerHTML = 
(`
<div class="swiper-slide-content">
<a href="./views/about-movie.html" class="flex justify-between items-center text-center">
<p class="text-white text-2xl font-serif-one font-extrabold p-8 rounded-50 bg-black">${index + 1 /**off by one error khe 😂  */}</p>
<img class="object-cover object-center" src="${imageBaseUrl}/w500/${poster_path}" alt="${title}">
<div class="flex flex-col items-start justify-between text-start h-full py-20 px-12">
    <p class="text-gray-100 font-serif-two text-sm capitalize rounded-10px p-8 border-solid border-2 border-gray-100 w-fit">${adult === false ? 'family' : 'adult'}</p>
    <p class="capitalize text-xl font-extrabold text-white font-serif-one">${title}</p>
    <span class="text-gray-100 text-xs font-medium flex items-center gap-4 capitalize">
        <i class="fa-solid fa-film"></i>
        <p class="font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
    <p class="dot-before flex capitalize font-serif-two leading-20 text-center">${original_language}</p>
</span>
    </span>
    <span class="flex gap-4 items-center ">
    <i class="fa-solid fa-star text-yellow icon-small text-center"></i>
    <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
    </span>
</div>
</a>
</div>

`);
swiperWrapperThree.appendChild(swiperThreeSlide);
swiperThreeSlide.addEventListener('click', ()=>{
  getMovieId(id);
 });
  };
};


fetchDataFromApi(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&page=1`, poster3);





const swiperFour = document.querySelector(".swiper4");
const swiperWrapperFour = swiperFour.querySelector(".swiper-wrapper");


const article = document.querySelector('#component-four');
  const articleImg = article.querySelector('.banner-image');
  const content = document.querySelector('.content');
  const description = content.querySelector('.description');
  

/**
 * I am tryna implement the logic according to the design:
 * When a slide-item is clicked the banner image and it's content do so too
 */

let slider_count = 0;  //Tracks the slide-item
let sliderBannerProps = [];   // stores the properties of the slider item that will be displayed in the banner
/***
 * This is for the best of Movies page, To prevent it from
 * showing the same shit every time
 */
const maxMoviePage = 400;
const minMoviePage = 1;

const moviePageToFetch = Math.floor(Math.random() * (maxMoviePage - minMoviePage + 1)) + minMoviePage;



const poster4 = function({results: movieList}){


  movieList.forEach((movie)=>{

    // gets the properties of the slider item that will be displayed in the banner
   const {backdrop_path,
    overview, 
    vote_average,
    title, 
    original_language,
     release_date,
    id} = movie;

   sliderBannerProps.push(movie);
   
  });


  /**
   * I wish I could have written this logic better.
   */

  //Renders the first one
  articleImg.src= `${imageBaseUrl}/w500/${sliderBannerProps[0].backdrop_path}`;
  articleImg.alt =`${sliderBannerProps[0].title}`;
  description.innerHTML = (`
 
  <div class="top">
      <h2 class="text-white text-white capitalize mbs-24 font-serif-two leading-32">Featured</h2>
      <h3 class="text-gray-100 text-base capitalize mb-8 font-serif-one leading-12">Top rated</h3>
  </div>
  
  <div class="bottom flex flex-col gap-10">
      <h4 class="text-xs text-gray-50 font-serif-one">Top rated globally</h4>
  <h1 class="text-white font-extrabold text-2xl font-serif-two">${sliderBannerProps[0].title}</h1>
   <span>
        <span class="flex gap-4 items-center">
        <i class="fa-solid fa-star text-yellow icon-small text-center"></i>
        <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${sliderBannerProps[0].vote_average}</p>
          </span>
      
          
          <span class="tiny-dots text-white flex">
          <p class="w-fit text-gray flex capitalize font-serif-two leading-20 text-center">${sliderBannerProps[0].original_language}</p>
      <p class="w-fit text-gray font-serif-two leading-20 text-center">${sliderBannerProps[0].release_date.substring(0, sliderBannerProps[0].release_date.indexOf('-'))}</p>
  </span>
  
  
  </span> 
  
 
  <span><p class="text-base text-gray-50 text-left font-serif-two font-light pxe-18">${sliderBannerProps[0].overview} 
           </p>
  </span>
  
  
  <span>
  <a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm font-bold font-serif-one w-fit leading-22 mbs-14"  href="./views/about-movie.html"><i class="fa-regular fa-circle-play"></i>Learn More</a>
             
  </span>
  
  </div>
  
  `);

  movieList.forEach((movie)=>{
    
    const {
    poster_path, 
    title,
    release_date,
    vote_average,
    original_language,
    id
        
  } = movie;

  
  
  //create slides

const swiperFourSlide = document.createElement('picture');
swiperFourSlide.classList.add('swiper-slide', 'swiper-slide-four','rounded-10px');
swiperFourSlide.setAttribute("slider-count",`${slider_count}`);

swiperFourSlide.innerHTML = 
(`
<div class="swiper-slide-content relative rounded-10px">
<img class="rounded-10px absolute w-full h-full" src="${imageBaseUrl}/w500/${poster_path}" alt="${title}" >

<div class="poster-content">
<span>
    <p class="capitalize text-xl font-extrabold text-white font-serif-one">'${title}'</p>
</span>

<span class="flex gap-4 items-center">
<span class="flex gap-4 items-center">
    <i class="fa-solid fa-star text-yellow icon-small text-center"></i>
    <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
</span>

<span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
<p class="font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
<p class="dot-before flex capitalize font-serif-two leading-20 text-center">${original_language}</p>
    </span>
</span>
</div>
</div>

${slider_count++}
`);



swiperWrapperFour.appendChild(swiperFourSlide);
swiperFourSlide.addEventListener('click', ()=>{
  getMovieId(id);
  });



  // gets the slider_count attritube
 const slides = Array.from(document.querySelectorAll("[slider-count]"));

 const slides_content = Array.from(swiperWrapperFour.querySelectorAll('.swiper-slide-content'));
  



 slides.forEach((slide,i)=>{
  
  slide.addEventListener('click', ()=>{
     activeSlide(i);
     showBanner(i);
     


//Omo just to apply css, I'm sure there is a more efficient way to write this, I just don't know it yet
//This function won't run if I don't put it in here  

function activeSlide(index){

  slides_content.forEach(slide_content=>{
    slide_content.classList.remove('active-slide');
  });
     slides_content[index].classList.add('active-slide');
};

    
  });
 });

});


};


//Now this is what's up


function showBanner(index){
    articleImg.src= `${imageBaseUrl}/w500/${sliderBannerProps[index].backdrop_path}`;
    articleImg.alt =`${sliderBannerProps[index].title}`;
  description.innerHTML = (`
 
  <div class="top">
  <h2 class="text-white text-white capitalize mbs-24 font-serif-two leading-32">Featured</h2>
  <h3 class="text-gray-100 text-base capitalize mb-8 font-serif-one leading-12">Top rated</h3>
  </div>
  
  <div class="bottom flex flex-col gap-10">
       <h1 class="text-white font-extrabold text-2xl font-serif-two">${sliderBannerProps[index].title}</h1>
   <span>
        <span class="flex gap-4 items-center">
              <i class="fa-solid fa-star text-yellow icon-small text-center"></i>
              <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${sliderBannerProps[index].vote_average}</p>
          </span>
      
      
          <span class="tiny-dots text-white flex">
      
      <p class="w-fit text-gray flex capitalize font-serif-two leading-20 text-center">${sliderBannerProps[index].original_language}</p>
      <p class="w-fit text-gray font-serif-two leading-20 text-center">${sliderBannerProps[index].release_date.substring(0, sliderBannerProps[index].release_date.indexOf('-'))}</p>
  </span>
  
  
  </span> 
  
  
  <span><p class="text-base text-gray-50 text-left font-serif-two font-light pxe-18">${sliderBannerProps[index].overview} 
        </p>
  </span>

  <span>
  <a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm font-bold font-serif-one w-fit leading-22 mbs-14"  href="./views/about-movie.html"><i class="fa-regular fa-circle-play"></i>Learn More</a>
             
  </span>
  
  </div>
  
  `);

}





fetchDataFromApi(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${moviePageToFetch}`, poster4);



 
const swiperFive = document.querySelector(".swiper5")
const swiperWrapperFive = swiperFive.querySelector(".swiper-wrapper");

const poster5 = function({results: movieList}){
  movieList.forEach((movie)=>{
    
   //gets me exactly what I need
   const {
    poster_path,
    title,
    release_date,
    original_language,
    vote_average,
    id
    
    
  } = movie;

  
const swiperFiveSlide = document.createElement('picture');
swiperFiveSlide.classList.add('swiper-slide', 'swiper-slide-five');

swiperFiveSlide.innerHTML = 
`
<a href="./views/about-movie.html">
<img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px object-cover object-center" loading="eager"   alt="${title}">

<div class="poster-content flex flex-col items-start gap-4 mbs-20">
    <span>
        <p class="text-gray-50 text-1xl capitalize  font-serif-two leading-32 font-bold">${title}</p>
    </span>
    
    <span class="flex gap-4 items-center">
    <span class="flex gap-4 items-center">
        <i class="fa-solid fa-star text-yellow icon-small"></i>
        <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
    </span>

    <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
    <p class="dot-before flex capitalize font-serif-two leading-20 text-center">${original_language}</p>
    <p class="font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
    </span>
    </span>
</div>
<a/>
`
swiperWrapperFive.appendChild(swiperFiveSlide);
swiperFiveSlide.addEventListener('click', ()=>{
  getMovieId(id);
 });

  });
}


fetchDataFromApi(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&with_genres=16`,poster5);








const swiperSix = document.querySelector(".swiper6")
const swiperWrapperSix = swiperSix.querySelector(".swiper-wrapper");

const poster6 = function({results: movieList}){
  movieList.forEach((movie)=>{
    
   //gets me exactly what I need
   const {
    poster_path,
    name,
    first_air_date,
    origin_country,
    vote_average,
    id
    
    
  } = movie;

  
const swiperSixSlide = document.createElement('picture');
swiperSixSlide.classList.add('swiper-slide', 'swiper-slide-six');

swiperSixSlide.innerHTML = 
(`
<a href="./views/about-series.html">
<img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px object-center object-cover" loading="eager" alt="${name}">
<div class="poster-content flex flex-col items-start gap-4 mbs-20">
    <span>
        <p class="text-gray-50 text-1xl capitalize font-serif-two leading-20 font-bold">${name}</p>
    </span>
    
    <span class="flex gap-4 items-center">
    <span class="flex gap-4 items-center">
        <i class="fa-solid fa-star text-yellow icon-small"></i>
        <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
    </span>

    <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
    <p class="font-serif-two leading-20 text-center">${origin_country}</p>
    <p class="dot-before flex capitalize font-serif-two leading-20">${first_air_date.substring(0, first_air_date.indexOf('-'))}</p>
    </span>
    </span>
</div>
</a>
`);
swiperWrapperSix.appendChild(swiperSixSlide);
swiperSixSlide.addEventListener('click', ()=>{
  getSeriesId(id);
 });
  });
};


fetchDataFromApi(`https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`,poster6);





const swiperSeven = document.querySelector(".swiper7")
const swiperWrapperSeven = swiperSeven.querySelector(".swiper-wrapper");

const poster7 = function({results: movieList}){
  movieList.forEach((movie)=>{
    
   //gets me exactly what I need
   const {
    poster_path,
    title,
    release_date,
    original_language,
    vote_average,
    id
    
    
    
  } = movie;

  
const swiperSevenSlide = document.createElement('picture');
swiperSevenSlide.classList.add('swiper-slide', 'swiper-slide-seven');

swiperSevenSlide.innerHTML = 
(`<a href="./views/about-movie.html">
<img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px object-cover object-center" loading="eager"   alt="${title}">

<div class="poster-content flex flex-col items-start gap-4 mbs-20">
    <span>
        <p class="text-gray-50 text-1xl capitalize  font-serif-two leading-32 font-bold">${title}</p>
    </span>
    
    <span class="flex gap-4 items-center">
    <span class="flex gap-4 items-center">
        <i class="fa-solid fa-star text-yellow icon-small"></i>
        <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
    </span>

    <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
    <p class="dot-before flex capitalize font-serif-two leading-20 text-center">${original_language}</p>
    <p class="font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
    </span>
    </span>
</div>
<a/>
`);
swiperWrapperSeven.appendChild(swiperSevenSlide);
swiperSevenSlide.addEventListener('click', ()=>{
  getMovieId(id);
 });
  });
};

fetchDataFromApi(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&region=IN&sort_by=popularity.desc&page=1&with_original_language=hi`,poster7);




/**
 * Was tryna see If I could get the movie at index 0 from swiper2, but I kept running into 'undefined' errors
 */
const component_eight = document.querySelector("#component-eight");
const component_eight_contentWrapper = component_eight.querySelector(".content-wrapper");
const component_eight_award = component_eight_contentWrapper.querySelector('.award');


const poster8 = function({results: movieList}){

    

const awardee = document.createElement('picture');
awardee.classList.add('flex', 'flex-col', 'gap-10');


awardee.innerHTML =
 
(`
<img src="${imageBaseUrl}/w1280/${movieList[0].backdrop_path}" alt="${movieList[0].title}">
<h2 class="text-gray-100 capitalize text-sm rounded-10px p-8 border-solid border-2 border-gray-100 w-fit font-serif-two">Movie of the day</h2>
<h1 class="text-white font-extrabold text-2xl text-left font-serif-two leading-32 capitalize">${movieList[0].title}</h1>
 <span class="flex flex-col gap-4">
      <span class="flex gap-4 items-center">
            <i class="fa-solid fa-star text-yellow icon-small text-center"></i>
            <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${movieList[0].vote_average}</p>
        </span>
    
    
        <span class="tiny-dots text-white flex">
    <p class="w-fit flex text-gray capitalize font-serif-two leading-20 text-center">${movieList[0].original_language}</p>
    <p class="w-fit text-gray font-serif-two leading-20 text-center">${movieList[0].release_date.substring(0,movieList[0].release_date.indexOf('-'))}</p>
</span>


</span> 


<span><p class="text-base text-gray-50  text-left font-serif-two font-light">${movieList[0].overview} 
     </p>
</span>


<span>
<a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm font-bold font-serif-one w-fit leading-22 mbs-14"  href="./views/about-movie.html"><i class="fa-regular fa-circle-play"></i>Learn More</a>           
</span>

`);

component_eight_award.appendChild(awardee);
awardee.addEventListener('click', ()=>{
  getMovieId(movieList[0].id);
 });
  
};


fetchDataFromApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&page=1`, poster8);




/***
 * This is for the best of Series page, To prevent it from
 * showing the same shit every time
 */
const maxSeriesPage = 80;
const minSeriesPage = 1;
//Don't ask me how I got them numbers, I was just playing with the Api 😂 
const seriesPageToFetch = Math.floor(Math.random() * (maxSeriesPage - minSeriesPage + 1)) + minSeriesPage;


const live_fast_content = component_eight.querySelector(".live-fast-content");

const poster9 = function({results: seriesList}){

  for(const[index,serie] of seriesList.entries()){
    
    if(index== 4){
      //I no need pass 4 movies here abeg
      return;
    }else{
   //gets me exactly what I need
   const {
    poster_path,
    name,
    first_air_date,
    origin_country,
    vote_average,
    adult,
    id
       
    
  } = serie;

  


 

    const tvCard = document.createElement('picture');
    
  
      tvCard.innerHTML =
(`
<a href="./views/about-series.html" class="flex items-center text-center">
       <img src="${imageBaseUrl}/w342/${poster_path}" alt="${name}">
      <div class="flex flex-col items-start text-start h-full py-20 px-12">
      <p class="text-gray-100 capitalize text-xs rounded-10px p-8 border-solid border-2 border-gray-100 w-fit font-serif-two">${adult===false ? 'family' : 'adult'}</p>
                 <p class="text-white font-extrabold text-2xl text-left font-serif-two leading-32 capitalize">${name}</p>
           <span class="text-gray-100 text-xs font-medium flex items-center gap-4 capitalize">
           <i class="fa-solid fa-film"></i>
           <p class="w-fit text-gray capitalize font-serif-two leading-20 text-center">${origin_country}</p>
    <p class="dot-before flex capitalize w-fit text-gray font-serif-two leading-20 text-center">${first_air_date.substring(0, first_air_date.indexOf('-'))}</p>
             </span>
                                        <span class="flex gap-4 items-center ">
                                            <i class="fa-solid fa-star text-yellow icon-small"></i>
                                            <p class="text-xl text-gray-50 font-semibold font-serif-two leading-20 text-center">${vote_average}</p>
                                        </span>
                                    </div>
                                </a>

                                `);

                               live_fast_content.appendChild(tvCard);
                               tvCard.addEventListener('click', ()=>{
                                getSeriesId(id);
                               });
  };
  };
 
};




fetchDataFromApi(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${seriesPageToFetch}`,poster9);



