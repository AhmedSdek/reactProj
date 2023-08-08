import { Container } from "react-bootstrap";
import NavBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Component/MovieDetails";

function App() {
  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route path="/" element= {<Container>
        <MovieList />
      </Container>}/>
        <Route path="/movie/:id" element= {<Container><MovieDetails /></Container>}/>
      </Routes>
    </div>
  );
}

export default App;
