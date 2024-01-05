
const only_content = document.querySelector('#only-content');
const title = document.querySelector('.title');
const only_content_wrapper = only_content.querySelector('.article-wrapper');
const main = document.querySelector('main');


import { fetchDataFromApi, imageBaseUrl } from "../features/auth/fetch.js";
import { api_key } from "../features/auth/auth.js";
import {getMovieId, getSeriesId} from '../js/global.js';


const searchParam = localStorage.getItem('searchQuery');

document.title = `${searchParam} - Saintstream movies`


let count = [];
const searchMovie = function({results: movieList}){

    if(movieList.length==0){
        count.push(movieList.length);
       } else{
      
    movieList.forEach((movie)=>{

       
     //gets me exactly what I need
     const {
      poster_path,
      title,
      release_date,
      original_language,
      vote_average,
      id
      
      
    } = movie
  
    
  const searchSlide = document.createElement('picture');
  searchSlide.classList.add('search-slide');
  
  searchSlide.innerHTML = 

  `
  <a href="./about-movie.html">
  <img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px" alt="${title}">
<div class="poster-content flex flex-col items-start gap-4">
    <span>
        <p class="text-gray-50 text-1xl capitalize font-bold">${title}</p>
    </span>
    
    <span class="flex gap-4 items-center">
    <span class="flex gap-4 items-center">
        <i class="fa-solid fa-star text-yellow icon-small"></i>
        <p class="text-xl text-gray-50 font-semibold">${vote_average}</p>
    </span>

    <span class="slash-before text-gray-100 text-xs font-medium flex gap-4 capitalize">
    <p>${original_language}</p>
    <p class="dot-before flex capitalize">${release_date.substring(0, release_date.indexOf('-'))}</p>
    </span>
    </span>
</div>
</a>
  `;
  only_content_wrapper.appendChild(searchSlide);
  searchSlide.addEventListener('click', ()=>{
    getMovieId(id);
   });
  

    });
  }
}


   


fetchDataFromApi(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchParam}&page=1&include_adult=false&language=en-US`,searchMovie);













const searchSeries = function({results: seriesList}){
      
    if(seriesList.length == 0){
        count.push(seriesList.length);
        
    } else{

    
    seriesList.forEach((series)=>{

       
      
     //gets me exactly what I need
     const {
      poster_path,
      name,
      first_air_date,
      original_language,
      vote_average,
      id


      
      
    } = series
  
    
  const searchSlide = document.createElement('picture');
  searchSlide.classList.add('search-slide');
  
  searchSlide.innerHTML = 

  `
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
    <p class="dot-before flex capitalize">${first_air_date.substring(0, first_air_date.indexOf('-'))}</p>
    </span>
    </span>
</div>
</a>
  `
  only_content_wrapper.appendChild(searchSlide);
  searchSlide.addEventListener('click', ()=>{
    getSeriesId(id);
   });
  
    });
  }
}

fetchDataFromApi(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${searchParam}&page=1&include_adult=false&language=en-US`,searchSeries);




/**
 * Ion know why this ain't working, funny thing is it was working when I initially wrote it
 * is this playing?
 */
if(count.includes(0)){
  console.log(main);
    main.innerHTML= 
    
    `
    <h2 class="text-white text-center">Nothing to see here</h2>
    <img src="../assets/images/404.jpg" style="margin: 0 auto" alt="">
    `;
    
}