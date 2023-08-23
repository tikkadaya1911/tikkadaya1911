/** @type {import('tailwindcss').Config} */


const plugin =require('tailwindcss/plugin ')
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors:{
            "color-primary": "#01051e",
            "color-primary-light": "020726",
            "color-primary-dark": "#010417",
            "color-secondary": "#ff7df3",
            "color-gray": "#333",
            "color-white": "#fff",
            "color-blob": "#A427DF",
        }
      },
      container:{
        center:true
      }
    },
    plugins: [],
  }






  <!-- font side  -->
  <div 
      class=" bg-[#9376E0] hover:bg-blue-700 text-white border-2 border-solid text-center py-10 px-6 rounded-2xl cursor-pointer  easn-in-duration-100 ">
      <div class=" inline-block rounded-2xl py-5 px-6 ">


          <p class="text-6xl  font-bold before:content-['$'] before:absolute before:text-lg    ">
              <span class="pl-4   "></span>
              500 <span class="text-lg font-normal tracking-wider">/per month </span>
          </p>

          <div class="py-10 ">
              <h3 class=" text-4xl font-bold pb-3 ">Premium</h3>
              <p class="leading-relaxed"> for Beginner who want to Scale Businesss Globaly </p>
          </div>



          <div class="space-y-4 italic ">
              <ul class=" hidden lg:flex items-center space-x-6  ">
                  <li class=""><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="32"
                              height="32" viewBox="0 0 14 14">
                              <path fill="none" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z" />
                          </svg></a></li>
                  <li class=" "><a href=""
                          class=" text-3xl g-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Expences
                          Manegment</a>
                  </li>
              </ul>


              <ul class=" hidden lg:flex items-center space-x-6  ">
                  <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                              viewBox="0 0 14 14">
                              <path fill="none" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z" />
                          </svg></a></li>
                  <li class=""><a href="#home"
                          class="text-3xl g-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Instant
                          Statistcs</a>
                  </li>
              </ul>


              <ul class=" hidden lg:flex items-center space-x-6  ">
                  <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                              viewBox="0 0 14 14">
                              <path fill="none" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z" />
                          </svg></a></li>
                  <li><a href="#home"
                          class=" italic text-3xl  g-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Crad
                          Manegment</a>
                  </li>
              </ul>


              <ul class=" hidden lg:flex items-center space-x-6  ">
                  <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                              viewBox="0 0 14 14">
                              <path fill="none" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z" />
                          </svg></a></li>
                  <li><a href="#home"
                          class="text-3xl g-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Bookmarks
                          Function</a>
                  </li>
              </ul>


              <ul class=" hidden lg:flex items-center space-x-6  ">
                  <li><a href=""> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                              viewBox="0 0 14 14">
                              <path fill="none" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.49 1.09L9.08 4.3a.51.51 0 0 0 .41.3l3.51.52a.54.54 0 0 1 .3.93l-2.53 2.51a.53.53 0 0 0-.16.48l.61 3.53a.55.55 0 0 1-.8.58l-3.16-1.67a.59.59 0 0 0-.52 0l-3.16 1.67a.55.55 0 0 1-.8-.58L3.39 9a.53.53 0 0 0-.16-.48L.67 6.05A.54.54 0 0 1 1 5.12l3.51-.52a.51.51 0 0 0 .41-.3l1.59-3.21a.54.54 0 0 1 .98 0Z" />
                          </svg></a></li>
                  <li><a href="#home"
                          class="text-3xl g-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Accounting
                          System</a>
                  </li>
              </ul>

              <button
                  class="bg-[#FF78C4] hover:bg-[#F29727] text-white font-bold py-2 px-4 rounded-full italic ">
                  Get Started
              </button>
          </div>
          </div>
          </div>