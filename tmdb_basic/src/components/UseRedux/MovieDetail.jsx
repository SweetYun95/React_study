import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchMoviesDetails } from '../../features/movieSlice'

function MovieDetail() {
   const { movieId } = useParams() //path에 있는 movieId를 가져옴
   const dispatch = useDispatch()
   /*
    state.movies = {
      movies: [...], // 인기 영화 목록
      movieDetails: ... , // 영화 상세 정보
      loading: false, // 로딩 여부
      error: null, // 에러메세지
   },
    */
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   // 컴포넌트 마운트 후 1번 실행되고, [a,b] 가 바뀔때마다 실행됨
   useEffect(() => {
      if (movieId) {
         dispatch(fetchMoviesDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>로딩중...</p>
   if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         {/* 
         마운트 발생 시 movieDetails의 값은 아직 null이다.
         -> 렌더링 이후 useEffect가 실행된 후 movieDetails 값이 들어옴
         -> && 조건부 연산자를 이용하여 movieDetails값이 있을때만 렌더링 하도록함
          */}
         {movieDetails && (
            <div>
               <div>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} />
               </div>
               <div>
                  <h2>{movieDetails.title}</h2>
                  <h3>줄거리</h3>
                  <p>{movieDetails.overview}</p>
                  <h3>장르</h3>
                  <p>{movieDetails.genres.map((genre) => `${genre.name}`).join(', ')}</p>
                  {/* <ul>
                     {movieDetails.genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                     ))}
                  </ul> */}
                  <h3>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3>평점</h3>
                  <p>{movieDetails.vote_average.toFixed(2)}</p>
               </div>
            </div>
         )}
      </div>
   )
}

export default MovieDetail
