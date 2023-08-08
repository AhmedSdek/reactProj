import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Pagenation from "./Pagenation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../Redux/Actions/moviesAction";
import { useEffect } from "react";


function MovieList({ getPages, pagecount}) {
    const [movies , setMovies] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllMovies())
        },[]);
        const movieData = useSelector((state) => state.movies);
        useEffect(()=> {
        setMovies(movieData)
        },[movieData]);
    return (
        <Row>
            
            { movies.length >= 1?(movies.map((item) => {
                return(
                    <MovieCard item= {item} key={item.id}/>
                )
            })) : <h2>data not found</h2>}
            <Pagenation getPages={getPages} pagecount = {pagecount}/>
        </Row>
    )
}

export default MovieList ;