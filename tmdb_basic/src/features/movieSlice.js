import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

// createAsyncThunk: 비동기 thunk 액션 -> 영화 목록을 API로부터 가져옴
// {type:'movies/fetchMovies',  } 액션객체
// createAsyncThunk(type명, 비동기 함수)
// type명 = slice.name/createAsyncThunk변수명
// 비동기 함수에서 API를 call하는 함수 실행

// 인기영화 목록 가져오기
// 액션 생성자 함수
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

// 영화 디테일 가져오기
export const fetchMoviesDetails = createAsyncThunk('movies/fetchMoviesDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [], // 인기 영화 목록
      movieDetails: null, // 영화 상세 정보
      loading: false, // 로딩 여부
      error: null, // 에러메세지
   },
   reducers: {},
   //    extraReducers: 비동기 액션이 발생했을때 state를 바꿔줌
   extraReducers: (builder) => {
      builder
         // 데이터를 가져오는 동안
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null // 다른 액션 생성자 함수에서 에러 발생 시 에러메세지가 남아있을 수 있기 때문에 초기화
         })
         // 데이터를 성공적으로 가져온 경우
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            //  action.payload 값은 fetchMovies() 함수에서 return해 주는 값
            state.movies = action.payload // 인기영화 목록
         })
         // api 호출이 실패한 경우
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message // 에러메세지
         })
         // details
         .addCase(fetchMoviesDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
            state.loading = false
            //  action.payload는 fetchMoviesDetails() 에서 리턴해주는 값
            state.movieDetails = action.payload
         })
         .addCase(fetchMoviesDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer // 리듀서 함수를 내보냄.
