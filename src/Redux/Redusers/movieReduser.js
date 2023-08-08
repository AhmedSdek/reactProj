import { AllMovies } from "../Types/movieTypes";

const initValue = {movies : [] , pageCunt : 0};
export const movieReduser = (state = initValue , action) => {
    switch (action.type){
        case AllMovies :
            return {movies : action.data , pagecount : action.pages}
        default : 
            return state;
    }
}