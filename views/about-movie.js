import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'



var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
 
  navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
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
        slidesPerView: 6,
        spaceBetweenSlides: 30
    }
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
       
    
    280: {
      slidesPerView: 2,
      spaceBetweenSlides: 24
  },

    380: {
      slidesPerView: 3,
      spaceBetweenSlides: 26
  }
},

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


  // Enable debugger
  debugger: true,
});

import { fetchDataFromApi,imageBaseUrl } from '../features/auth/fetch.js';
import { api_key } from '../features/auth/auth.js';
import { getpersonId,getMovieId } from '../js/global.js';

const movieId = localStorage.getItem('movieId');


const component_one = document.querySelector('#component-one');
const slide_wrapper = component_one.querySelector('.slide-wrapper');
const component_two = document.querySelector('#component-two');
const story_line = component_two.querySelector('.story-line');
const actors_container =  component_two.querySelector('.swiper1');
const actors_wrapper = actors_container.querySelector('.swiper-wrapper');
const component_three = document.querySelector('#component-three');
const video_wrapper = component_three.querySelector('.swiper-wrapper');
const component_four = document.querySelector('#component-four');
const similar_wrapper = component_four.querySelector('.swiper-wrapper');








 


const aboutMovie =  function (movie){


	    //gets me exactly what I need
const {
	backdrop_path,
	title,
  genres,
	original_language,
	 overview,
  production_countries: [{iso_3166_1}],
   release_date,
   runtime,
   homepage,
   casts:{cast},
   videos: {results: videos},
   genres: [{id}]
   
	} = movie

  document.title = `${title} - Saintstream movies`;

  function getGenres(genres){
    let genre = genres[0].name;
    return genre.toString();
  }

  function time_convert(num){ 
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;

 
  return `${hours}h${minutes}m`;         
}





  const main_slide = document.createElement('div');
  main_slide.classList.add('main-slide');

  main_slide.innerHTML = `
     
  <img class="main-picture absolute w-full h-full object-center object-cover" src = "${imageBaseUrl}/w1280/${backdrop_path}" alt="${title}">
  <div class="movie-content absolute flex flex-col gap-15">
  <h3 class="text-sm font-serif-two text-white bg-black-800 px-16 py-4 rounded-16px w-fit">${getGenres(genres)}</h3>
  <h2 class="text-left font-serif-two font-bold text-white capitalize">${title}</h2>
  <span class="tiny-dots text-white flex">
  <p class="w-fit font-serif-two font-medium text-little text-gray">${release_date.substring(0,release_date.indexOf('-'))}</p>
  <p class="dot-before flex capitalize w-fit font-serif-two font-medium text-little text-gray">${time_convert(runtime)}</p>
   <p class="dot-before flex capitalizew-fit font-serif-two font-medium text-little text-gray ">${original_language}</p>
   <p class="dot-before flex capitalize w-fit font-serif-two font-medium text-little text-gray ">${iso_3166_1}</p>
    </span>
 
  <span >
      <a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm font-bold font-serif-one w-fit leading-22"  href="${homepage}"><i class="fa-solid fa-link"></i>visit website</a>
     
      
  </span>
  
  </div>


  
  `

  slide_wrapper.appendChild(main_slide);
  
story_line.classList.add('font-serif-two' ,'font-light' ,'text-white' ,'text-left');
  story_line.innerHTML =`${overview}`

  get_Cast_Details(cast);


  function get_Cast_Details(actors){
    
    actors.forEach((actor,index)=>{

      const actor_holder = document.createElement('div');
      actor_holder.classList.add('actor','swiper-slide');


    actor_holder.innerHTML = `
           
    <a class="flex items-center gap-12" href="./about-person.html">
    <img src="${actor.profile_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${actor.profile_path}`}" class="actor-image object-center object-fit rounded-50 gap-4" alt="${actor.name}">
        <span class="flex flex-col justify-between gap-4">
            <p class="leading-24 font-semibold text-white text-little font-serif-one">${actor.name}</p>
            <p class="font-medium leading-20 font-serif-one text-white text-xs">${actor.character}</p>
        </span>
    </a>
        
    ` 
   
    actors_wrapper.appendChild(actor_holder);
    actor_holder.addEventListener('click', ()=>{
      getpersonId(actor.id);
     });
    });
    
  }

  

  function get_videos(options){
   
    options.forEach(({type,site,key,name})=>
    {
    if((type === "Trailer" || type === "Teaser") && site === "YouTube"){
      const youtubeCard = document.createElement('div');
  youtubeCard.classList.add("swiper-slide", "youtube-card");
  youtubeCard.innerHTML = 
  
  `<iframe
  src="https://www.youtube.com/embed/${key}?&theme=dark&color=white&rel=0" 
  frameborder="0" allowfullscreen="1" title="${name}" 
  loading="lazy"  height="200px"width="360px">
  </iframe>`
   
  video_wrapper.appendChild(youtubeCard);
    }
    
    });
  }


  get_videos(videos);

  

  /**
   * Bug alert, I ain't seen a movie yet with more than two genres, but If it later happens
   * I wrote something against it in about-series.js
   */

  similar_movies(id);


  }


  fetchDataFromApi(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=casts%2Cvideos%2Cimages%2Creleases%2Creviews&language=en-US`, aboutMovie);




  function similar_movies(id){
  
    function similarMovies({results:similar}){
      
     
      if(similar.length=== 0){
        component_four.remove();
        return;
       
      }else{
      
        similar.forEach((movie)=>{
      
        const {
        poster_path,
        title,
        original_language,
        vote_average,
        release_date,
        id
                
        
      } = movie

      


       
const swiperThreeSlide = document.createElement('picture');
swiperThreeSlide.classList.add('swiper-slide', 'swiper-slide-three');


     swiperThreeSlide.innerHTML = (`
     <a href="./about-movie.html">
     <img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px" alt="${title}">
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
         <p class="dot-before flex capitalize font-serif-two leading-20 text-center">${release_date.substring(0,release_date.indexOf('-'))}</p>
         </span>
         </span>
     </div>
     </a>
     `);
     
          similar_wrapper.appendChild(swiperThreeSlide); 
          swiperThreeSlide.querySelector('a').addEventListener('click', ()=>{
            getMovieId(id);
           }); 
        });
  }
}



    fetchDataFromApi(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`, similarMovies);

  }




  let count = 1;/**
  * Wanted to write a function to load more reviews but I don't think it would make sense to do that
  */
  const component_five = document.querySelector('#component-five');
const reviews_wrapper = component_five.querySelector('.movie-reviews');



get_Reviews(movieId);
function get_Reviews(id){

  
const reviews = function({results: reviewList}){
   

  if(reviewList.length == 0){
    component_five.remove();
    return;
  
  }else{
  
  reviewList.forEach((movie)=>{
   
   //gets me exactly what I need
   const {
    author,
    author_details:{username, avatar_path,rating},
   
    content,
    updated_at
        
  } = movie

  
const review_card = document.createElement('div');
review_card.classList.add('review-card', 'flex', 'flex-col', 'gap-15','my-15');



review_card.innerHTML = 
(`
<div class="top flex gap-10 items-center">
            <img src="${avatar_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${avatar_path}`}" class="actor-image object-center object-fit rounded-50 gap-4" alt="${author}">
            <div class="text-white flex flex-col">
                <span>
                    <p class="font-semibold text-white text-sm font-serif-one leading-20 text-left">A review by ${author}</p>
                </span>
                <span class="flex gap-4 items-center">
                    <span class="flex gap-4 items-center">
                        <i class="fa-solid fa-star text-yellow icon-small"></i>
                        <p class="text-xl text-gray-50 font-light font-serif-two leading-20 text-center">${rating == null ? '😃 ': `${rating}`}</p>
                    </span>
                  <span>
                    <p class="text-gray-50 font-semibold font-serif-two leading-20 text-center">recently written and updated by ${username} on ${updated_at.substring(0,updated_at.indexOf('T'))}</p>
                  </span>
                </span>
            </div>
        </div>
        <div class="bottom text-white">
            <p class="font-serif-two font-light text-white text-left leading-32">${content}</p>
        </div>
`);

reviews_wrapper.appendChild(review_card);

  });
}
}

fetchDataFromApi(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=${count}`,reviews);

}


