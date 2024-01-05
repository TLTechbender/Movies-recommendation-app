'use strict'
import { api_key } from "../features/auth/auth.js";
import { fetchDataFromApi, imageBaseUrl } from "../features/auth/fetch.js";
import { getMovieId } from "../js/global.js";



/**
 * I wanted to follow the design on this but like my javascript skills can't match it yet,
 * I think the best way to implement the design is to get it from the backend
 */

function checkDate(date){
    const [year, month, day] = date.split('-');
    const parsedDate = new Date(+year, +month - 1, +day);
    let answer = String(parsedDate);
    
    return answer.slice(0,answer.indexOf('00'));
    }




const content_wrapper = document.querySelector('.section-content-wrapper');
//get me the results key-value from the data object

const upcoming = function ({results : data}){


	data.forEach(incoming=>{

    //gets me exactly what I need
const {
    id,
    original_language,
     title,
    poster_path,
    release_date
	} = incoming

    


    const month = document.createElement('div');
    month.classList.add('month');

    month.innerHTML =
   `
<picture class="">
<a href="./about-movie.html" class="flex gap-4 items-center text-center">
<p class="text-white text-2xl  p-8 rounded-50 bg-black">${original_language}</p>
<img src="${imageBaseUrl}/w500/${poster_path}" class="rounded-10px" alt="${title}">
<span class="flex flex-col">
<p class="capitalize text-xl font-extrabold text-white text-start h-full py-20 px-12">${title}</p>  
<p class="capitalize text-xl font-extrabold text-white text-start h-full py-20 px-12">${checkDate(release_date)}</p> 
</span> 
</a>
</picture>
`;



content_wrapper.appendChild(month);
month.addEventListener('click', ()=>{
    getMovieId(id);
   });

});

}






fetchDataFromApi(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=1`, upcoming);



