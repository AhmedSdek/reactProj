import axios from "axios";
import { AllMovies, movieApi } from "../Types/movieTypes"

export const getAllMovies = () => {
    return async(dispatch) => {
        const responsive =await axios.get(movieApi);
        dispatch({type : AllMovies , data : responsive.data.results, pages :responsive.data.total_pages})
    } 
};
export const getMovieSearsh = (word) => {
    return async(dispatch) => {
        const responsive =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d4cbfe47f14bc16cfefd10fa3dfc816&query=${word}&language=ar`);
        dispatch({type : AllMovies , data : responsive.data.results, pages :responsive.data.total_pages})
    } 
}
export const getPage = (page) => {
    return async(dispatch) => {
        const responsive =await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0d4cbfe47f14bc16cfefd10fa3dfc816&language=ar&page=${page}`);
        dispatch({type : AllMovies , data : responsive.data.results, pages :responsive.data.total_pages})
    } 
}