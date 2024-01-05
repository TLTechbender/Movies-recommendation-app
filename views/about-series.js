import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiperone = document.querySelector('swiper1');

var swiper1 = new Swiper('.swiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

  // Enable debugger
  debugger: true,
});


var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

  // Enable debugger
  debugger: true,
});



var swiper3 = new Swiper('.swiper3', {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

  // Enable debugger
  debugger: true,
});

import { fetchDataFromApi,imageBaseUrl } from '../features/auth/fetch.js';
import { api_key } from '../features/auth/auth.js';
import { getpersonId, getSeriesId } from '../js/global.js';

const seriesId = localStorage.getItem('seriesId');


const component_one = document.querySelector('#component-one');
const slide_wrapper = component_one.querySelector('.slide-wrapper');
const component_two = document.querySelector('#component-two');
const story_line = component_two.querySelector('.story-line');
const directors_container =  component_two.querySelector('.directors');
const directors_wrapper = directors_container.querySelector('.swiper-wrapper');
const component_three = document.querySelector('#component-three');
const video_wrapper = component_three.querySelector('.swiper-wrapper');
const component_four = document.querySelector('#component-four');
const similar_wrapper = component_four.querySelector('.swiper-wrapper');








 


const aboutMovie =  function (movie){
   
	    //gets me exactly what I need
const {
	backdrop_path,
	original_name,
    genres,
	original_language,
	 overview,
  production_countries: [{iso_3166_1}],
  episode_run_time: [runtime],
   homepage,
   created_by:[{name, profile_path, id}],
    seasons:[{season_number}],
   videos: {results: videos},
   first_air_date
   
	} = movie

  document.title = `${original_name} - Saintstream movies`

  function getGenresName(genres){
    const genreNameArray = [];
  genres.forEach(genre=>{
   genreNameArray.push(genre.name);
   });
   return genreNameArray.toString();
  }

  
  function getGenresId(genres){
    const genreArray = [];
  genres.forEach(genre=>{
   genreArray.push(genre.id);
   });
   return genreArray;
  }


  function time_convert(num){ 
   var hours = Math.floor(num / 60);  
   var minutes = num % 60;

 
  return `${hours}h${minutes}m`;         
}





  const main_slide = document.createElement('div');
  main_slide.classList.add('main-slide');

  main_slide.innerHTML = `
     
  <img class="main-picture absolute w-full h-full object-center object-cover" src = "${imageBaseUrl}/w1280/${backdrop_path}" alt="${original_name}">
  <div class="movie-content absolute flex flex-col gap-15">
  <h3 class="text-base text-white bg-black-800 px-16 py-4 rounded-16px w-fit">${getGenresName(genres)}</h3>
  <h2 class="text-left font-extrabold text-white capitalize">${original_name}</h2>
  <span class="tiny-dots text-white flex">
  <p>${first_air_date.substring(0,first_air_date.indexOf('-'))}</p>
  <p class="dot-before flex capitalize">${time_convert(runtime)}</p>
   <p class="dot-before flex capitalize">${original_language}</p>
   <p class="dot-before flex capitalize">${iso_3166_1}</p>
    </span>
 
  <span >
      <a class="w-fit capitalize bg-green blur rounded-10px px-24 py-12 flex items-center gap-10 text-white text-sm w-fit leading-22"  href="${homepage}"><i class="fa-regular fa-circle-play"></i>visit website</a>
     
      
  </span>
  
  </div>


  
  `

  slide_wrapper.appendChild(main_slide);
  

  story_line.innerHTML =`${overview}`
  console.log(name,profile_path,id);
  get_Director_Details({name,profile_path});


  function get_Director_Details(...director){
    
    director.forEach(({name, profile_path,id})=>{
         
      const director_holder = document.createElement('div');
      director_holder.classList.add('director','swiper-slide');


    director_holder.innerHTML = `
           
    <a class="flex items-center" href="./about-person.html">
    <img src="${profile_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${profile_path}`}" class="director-image object-center object-fit rounded-50 gap-4" alt="${name}">
        <span class="flex flex-col justify-between gap-10">
            <p class="">${name}</p>
           </span>
    </a>
        
    ` 
   
    directors_wrapper.appendChild(director_holder);
    director_holder.addEventListener('click', ()=>{
      getpersonId(id);
     });
     console.log(director_holder);
    });
   
  }

  

  function get_videos(options){
   
    options.forEach(({type,site,key,name})=>
    {
    if((type === "Trailer" || type === "Teaser"  ) && site === "YouTube"){
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
  similar_series(getGenresId(genres));


  }


  fetchDataFromApi(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${api_key}&append_to_response=videos&language=en-US`, aboutMovie);




  function similar_series(input){
   
    function similarMovies({results:similar}){
      console.log(similar);

        //Incase it can't find anything
        if(similar !== undefined){
     
      if(similar.length === 0){
        return; 
         }
     
        else{
      
        similar.forEach((movie)=>{
      
        const {
        poster_path,
        name,
        original_language,
        vote_average,
        first_air_date,
        id

          
        
      } = movie

      


       
const swiperThreeSlide = document.createElement('picture');
swiperThreeSlide.classList.add('swiper-slide', 'swiper-slide-three');


     swiperThreeSlide.innerHTML = `
     <a href="./about-series.html">
     <img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px" alt="${name}">
     <div class="poster-content flex flex-col items-start gap-4">
         <span>
             <p class="text-gray-50 text-1xl capitalize font-bold">${name}</p>
         </span>
         
         <span class="flex gap-4 items-center">
         <span class="flex gap-4 items-center">
             <i class="fa-solid fa-star text-yellow icon-small"></i>
             <p class="text-xl text-gray-50 font-semibold">${vote_average}</p>
         </span>

         <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
         <p>${original_language}</p>
         <p class="dot-before flex capitalize">${first_air_date.substring(0,first_air_date.indexOf('-'))}</p>
         </span>
         </span>
     </div>
     </a>
     `;
     
          similar_wrapper.appendChild(swiperThreeSlide);  
          swiperThreeSlide.addEventListener('click', ()=>{
            getSeriesId(id);
           });
        });
  }

}
else{
    return;
}
}


 
input.forEach(ele=>{
    fetchDataFromApi(`https://api.themoviedb.org/3/tv/${ele}/recommendations?api_key=${api_key}`, similarMovies);
});
   

  }




  let count = 1; /**
   * Wanted to write a function to load more reviews but I don't think it would make sense to do that
   */

  const component_five = document.querySelector('#component-five');
const reviews_wrapper = component_five.querySelector('.movie-reviews');



get_Reviews(seriesId);
function get_Reviews(id){

  
const reviews = function({results: reviewList}){
   console.log(reviewList);

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
review_card.classList.add('review-card', 'flex', 'flex-col', 'gap-15');



review_card.innerHTML = 
`
<div class="top flex gap-10 items-center">
            <img src="${avatar_path == null ? '../assets/images/dark.jpg': `${imageBaseUrl}/w185/${avatar_path}`}" class="director-image object-center object-fit rounded-50 gap-4" alt="${author}">
            <div class="text-white flex flex-col">
                <span>
                    <p>A review by ${author}</p>
                </span>
                <span class="flex gap-4 items-center">
                    <span class="flex gap-4 items-center">
                        <i class="fa-solid fa-star text-yellow icon-small"></i>
                        <p class="text-xl text-gray-50 font-semibold">${rating == null ? '😃 ': `${rating}`}</p>
                    </span>
                  <span>
                    <p>recently written and updated by ${username} on ${updated_at}</p>
                  </span>
                </span>
            </div>
        </div>
        <div class="bottom text-white">
            <p>${content}</p>
        </div>
`
console.log(review_card);
reviews_wrapper.appendChild(review_card);

  });
}
}

fetchDataFromApi(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${api_key}&language=en-US&page=${count}`,reviews);

}


