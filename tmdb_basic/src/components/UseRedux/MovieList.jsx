import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../../features/movieSlice'

function MovieList() {
   const dispatch = useDispatch()

   /*
    state.movies = {
     movies: [...],
      loading: false,
      error: null,
    }
    */
   const { movies, loading, error } = useSelector((state) => state.movies)

   // [dispatch] -> 마운트 됬을 때 한번 실행되고, dispatch값이 변할때마다 실행
   useEffect(() => {
      // fetchMovies() 액션 생성자 함수 실행
      dispatch(fetchMovies())
   }, [dispatch]) // useEffect안에서 dispatch 사용시 무조건 지정

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}...</p>

   return (
      <div style={{ padding: '20px' }}>
         <h1>인기 영화 목록</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
