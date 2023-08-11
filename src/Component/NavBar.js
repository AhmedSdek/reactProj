import { Container, Form, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllMovies , getMovieSearsh} from "../Redux/Actions/moviesAction";

function NavBar() {
const onSearch = (word)=> {
    search(word)
}
const dispatch =useDispatch();
const search = (word) => {
    if(word === '') {
        dispatch(getAllMovies())
    }else{
        dispatch(getMovieSearsh(word))
        
    }
}
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
            <Link className = 'navbar-brand' to="/MoviePro">EgyBest</Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{justifyContent: "flex-end"}}>
                <Form className="d-flex" style={{width: '95%'}}>
                <Form.Control onChange={(e) => {onSearch(e.target.value)}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar ;