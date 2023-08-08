import React from 'react'
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import './Css/pagination.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPage } from '../Redux/Actions/moviesAction';

function Pagenation() {
    const [pagecount , setPagecount] = useState(0)
    const pages = useSelector((state) => state.pagecount); 
    const dispatch = useDispatch();
    useEffect(()=> {
        setPagecount(pages)
        },[pages]);
    //get pages
    const handlePageClick = (data) => { 
        dispatch(getPage(data.selected + 1))
    }
    
    return (
        <Container>
            <ReactPaginate 
            breakLabel="..."
            breakAriaLabels={''}
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            pageCount={pagecount }
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName={'pagination justify-content-center p-3'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item mx-2'}
            nextLinkClassName={'page-link'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item mx-2'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            />
        </Container>
    )
}

export default Pagenation ;