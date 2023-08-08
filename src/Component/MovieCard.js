import React from 'react'
import { Card, Col} from 'react-bootstrap'
import './Css/style.css';
import { Link } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";
function MovieCard({item}) {
    return (
        <Col xs={12} sm={6} lg={3}>
            <Link to={`/movie/${item.id}`}>
            <Zoom>
                <Card className='card-head my-3'  style={{ height: '20rem', textAlign:'center'}}>
                    <Card.Img variant="top" src={`
                    https://image.tmdb.org/t/p/w500${item.poster_path}`} style={{height:'100%'}}/>
                    <Card.Body className='overlay-card'>
                    <Card.Title>{item.original_title}</Card.Title>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.release_date}
                            <br></br>
                            {item.vote_average}
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Zoom>
            </Link>
        </Col>
    )
}

export default MovieCard ;