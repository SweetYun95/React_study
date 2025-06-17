import { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../../api/tmdbApi'

function MovieUpcoming() {
   const [upcomigMovies, setUpcomigMovies] = useState([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(null)

   useEffect(() => {
      const fetchMovies = async () => {
          try {
             const upcomingMoviesList = await getUpcomingMovies()
             setUpcomigMovies(upcomingMoviesList.data.results)
          } catch (error) {
              setError(error.message)
          } finally {
              setLoading(false)
         }
      }
      fetchMovies()
   }, [])

   if (loading) return <p>로딩중</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div>
         <h1>개봉예정 영화 목록</h1>
         <ul>
            {upcomigMovies.map((upcomingMovie) => (
               <li key={upcomingMovie.id}>{upcomingMovie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieUpcoming
