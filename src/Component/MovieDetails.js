import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Css/details.css';
function MovieDetails() {
    const params = useParams() ;
    // console.log(params);
    const [details , setDetails] =useState([]);
    const MovieDet = async() => {
        const responsive =await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0d4cbfe47f14bc16cfefd10fa3dfc816&language=ar`);
        setDetails(responsive.data);
    };
    useEffect(() => {
        MovieDet();
    },[]);
    return (
        <Container style={{padding:'20px 0'}}>
        <Row className='details-head' style={{alignItems: 'center' ,marginBottom : '10px' , color: 'white', padding: '20px 0' , backgroundColor : 'rgb(33 33 33)'}}>
            <Col style={{textAlign: 'right'}}>
                <img style={{height:'400px',width: '100%'}} src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`} alt=''></img>
            </Col>
            <Col>
                <h2>
                    اسم الفيلم : {details.title}
                </h2>
                <p>
                    تاريخ الفيلم : {details.release_date}
                </p>
                <p>
                    التقييم : {details.vote_average}
                </p>
            </Col>
        </Row>
        <Row style={{marginBottom : '30px' , padding: '20px 0', backgroundColor : 'rgb(33 33 33)'}}>
            <Col style={{textAlign : 'right' , color: 'white'}}>
                <h3 style={{padding: '10px 0'}}>
                    القصه 
                </h3>
                <p>
                    {details.overview}
                </p>
            </Col>
        </Row>
            <Row>
                <Col style={{textAlign : 'center'}}>
                    <Link to='/' >
                        <Button style={{marginLeft:'10px'}}> الصفحه الرئيسيه </Button>
                    </Link>
                    <a href={details.homepage}>
                        <Button> مشاهده الفيلم</Button>
                    </a>
                </Col>
            </Row>
    </Container>
)
}

export default MovieDetails ;