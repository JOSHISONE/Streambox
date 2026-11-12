import { TbPlayerPlayFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { moviedrop } from "../src/data.jsx";
import { useState, useEffect } from "react";

function MovieCard(){
    const [currentIndex, setCurrentIndex] = useState(2);
    const [MovieDisplay, setMovieDisplay] = useState(false);
    useEffect(()=>{if (!MovieDisplay) return undefined 
      const handlekeycost = (event) =>{ if (event.key === 'Escape') setMovieDisplay(false) }
      document.addEventListener('keydown', handlekeycost);
      return () => {
        document.removeEventListener('keydown', handlekeycost);
      };
    },
    [MovieDisplay]);
    const r= moviedrop[currentIndex]
    const nextMovie = () => {
      setCurrentIndex((r) =>
      r === moviedrop.length -1?0:r+1)
    }
    const prevMovie = () => {
  setCurrentIndex((r) =>
    r === 0 ? moviedrop.length - 1 : r - 1)
    }
    const VisibleMovies = [-2, -1, 0, 1, 2].map((r) =>{
      const index = (currentIndex + r + moviedrop.length) % moviedrop.length;
      return{movie:moviedrop[index], index, };
    });
    return(
      <section>
        {/* Movie Card */}
          <div className="flex gap-3 items-center justify-center px-5 pt-12 pb-5 overflow-x scrollbar-auto none">
            {VisibleMovies.map((movie, index) => {
              const isActive = index === currentIndex;
         
              return(
                 <button key={movie.id} type="button" aria-label={`Select ${movie.title}`} aria-pressed={isActive} onClick= {()=> setCurrentIndex(index)} className={`relative shrink-0 cursor-pointer rounded-lg transition-all duration-500 ease-in-out ${isActive? 'h-40 lg:h-72 w-20 lg:w-66 lg:scale-120 lg:px-8': 'h-30 lg:h-68 w-20 lg:w-50 opacity-55 hover:opacity-100'}`}>
                <img src= {movie.movie.img} alt= '' className= "lg:h-full lg:w-full object-cover"/>
                {isActive &&(
                  <div className="absolute bottom-0 top-133 lg:top-65 left-0 right-0 bg-opacity-70 p-3 flex items-center justify-center">
                  <div className="bg-gray-800 rounded-4xl p-2">
                  <button className= "bg-amber-300 hover:bg-amber-500 p-3 rounded-3xl">
                  <TbPlayerPlayFilled size={24}/>
                </button>
                   </div>
                      </div>
            )}
            </button>
              )
            })}
            </div>
        {/* Movie Information */}
        <div className="text-white text-center mt-7.5">
            <h2 className="text-4xl font-bold">{r.title}</h2>
            <p className="text-sm py-3 mx-auto max-w-xl text-center text-balance">{r.description}</p>
            <div className=" flex items-center justify-center gap-2.5 mt-0.5  font-semibold">
              <span>{r.year}</span>
              <span>•</span>
              <span>{r.movieType}</span>
              <span>•</span>
              <span>{r.hours}</span>
            </div>
             <div className="flex items-center justify-center gap-4 mt-3 text-white">
          <button>
            <h6 className="bg-gray-600 rounded-md px-6 py-2.5 ">Trailer</h6>
          </button>
          <button className="bg-gray-600 rounded-md px-3.5 py-3 text-yellow-400">
            <FaHeart />
          </button>
          <button className="bg-gray-600 rounded-md px-3.5 py-3 text-white">
            <FaBookmark />
          </button>
          <button onClick={()=> setMovieDisplay(true)} className="bg-gray-600 rounded-md px-6 py-2.5 ">
            <h6>Details</h6>
          </button>
          </div>
        </div>
         {/* Display Modal */}
        {MovieDisplay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5">
            <section className="relative w-full">
              <button className="absolute right-5 top-4 rounded-full text-amber-300 bg-black/50" onClick={()=> setMovieDisplay(false)}>
                <FiX/>
              </button>
              <div className="flex items-center justify-center gap-4 bg-gray-800 p-5">
                  <img src={r.img} alt="" className="h-[50vh] w-full round-lg object-cover shadow-lg " />
                  <div>
                    <h3 className="text-amber-300">Movie Title</h3>
                    <h2 className="text-4xl font-bold text-amber-50">{r.title}</h2>
            <p className="text-lg py-3 w-75 text-amber-50">{r.description}</p>
            <div className=" text-2xl text-amber-50 font-semibold">
              <span>{r.year}</span>
              <span>•</span>
              <span>{r.movieType}</span>
              <span>•</span>
              <span>{r.hours}</span>
            </div>
                  </div>
                </div>
              </section>
            </div>
          )}


        {/* Movie Controller */}
       <div className=" flex items-end justify-end gap-3 ">
        <button onClick={prevMovie} className="bg-gray-600 mt-3 lg:rounded-full p-2"><FaChevronLeft size={34}/></button>
        <button onClick={nextMovie} className="bg-amber-400 mt-3  lg:rounded-full p-2"><FaChevronRight size={34}/></button>
       </div>
      </section>
    )
};

export default MovieCard;