// BlogDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';

const BlogDetails = () => {
    const initialiseBlogDetails = { title: "", authorName: "", description: "" };
    const [blogDetails, setBlogDetails] = useState(initialiseBlogDetails);

    const dispatch = useDispatch()
    const { id } = useParams();
    const Blogs = useSelector(state => state.blogs.blogs);

    useEffect(() => {
        const blog = Blogs.find(u => u.id === id)
        const fetchedDetails = { title: blog.title, authorName: blog.authorname, description: blog.description }
        setBlogDetails(fetchedDetails)
    }, []);

    return (
        <>
            <Container sx={{ textAlign: 'center' }}>
                <h1> {blogDetails.title}</h1>
                <p><b>Author: {blogDetails.authorName}</b></p>
                <p>{blogDetails.description}</p>
            </Container >
        </>
    );
};

export default BlogDetails;
