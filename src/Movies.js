import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movie , isLoading } = useGlobalContext()
  

  if(isLoading){
    return(
      <div className="movie-section">
        <div className="loading">
          loading....
        </div>
      </div>
    );
  }
  
  
  return (
    <>

      <section className='movie-page'>
        <div className='grid grid-4-col'>
          {movie.map((currMovie) => {
            const {imdbID , Title , Poster} = currMovie;
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                 <div className="card">
                  <div className="cardinfo">
                    <h2>{Title}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                 </div>
              </NavLink>
            )

          })}
        </div>
      </section>


    </>
  )
}

export default Movies;