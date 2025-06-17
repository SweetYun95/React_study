import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchMoviesDetails } from '../../features/movieSlice'

function MovieDetail() {
   const { movieId } = useParams() //path에 있는 movieId를 가져옴
   console.log(movieId)

   //       const dispatch = useDispatch()

   //       const { movieDetails, loading, error } = useSelector((state) => state.movies)
   //       console.log(movieDetails)

   //   const movieId = urlParams.get('movie_id')

   //       useEffect(() => {
   //          dispatch(fetchMoviesDetails())
   //       }, [dispatch])

   //       if (loading) return <p>로딩중...</p>
   //       if (error) return <p>Error: {error}</p>

   return (
      <div style={{ padding: '20px' }}>
         <div>
            <div></div>
            <div>
               <h2>제목</h2>
               <h3>줄거리</h3>
               <p></p>
               <h3>장르</h3>
               <p></p>
               <h3>개봉일</h3>
               <p></p>
               <h3>평점</h3>
               <p></p>
            </div>
         </div>
      </div>
   )
}

export default MovieDetail
