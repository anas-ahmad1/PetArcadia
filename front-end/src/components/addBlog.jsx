import React, { useState } from 'react';
import axios from 'axios';
import { addBlog } from "../redux/blogSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Container,
    TextField,
    Typography,
    Avatar,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';

const BlogForm = () => {
    const [blogData, setBlogData] = useState({
        heading: '',
        author: '',
        text: '',
    });

    const [avatarImage, setAvatarImage] = useState(null);
    const [blogImage, setBlogImage] = useState(null);

    const handleInputChange = (e) => {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setAvatarImage(file);

        // You can also add logic to display a preview of the avatar here if needed.
    };

    const handleBlogImageChange = (e) => {
        const file = e.target.files[0];
        setBlogImage(file);

        // Display a preview of the blog image on the page
        const reader = new FileReader();
        reader.onload = (event) => {
            // event.target.result contains the base64-encoded image data
            // You can use this to display the preview
            console.log('Blog Image Preview:', event.target.result);
        };
        reader.readAsDataURL(file);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const title = blogData.heading;
        const authorname = blogData.author;
        const description = blogData.text;
        console.log(title, authorname, description)

        await axios.post("http://localhost:3000/addblog", { title, authorname, description })
            .then((res) => {
                dispatch(addBlog(res.data))
                navigate('/getblogs')
                //first we sent a post request to our backend server
                //the server responds with res.data (contains the pet object in JSON)
            })
            .catch((error) => {
                console.log("Error!");
                console.log(error)
            })
        console.log('Form submitted:', blogData);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Write Your Blog
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Blog Heading"
                    fullWidth
                    margin="normal"
                    name="heading"
                    value={blogData.heading}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Author Name"
                    fullWidth
                    margin="normal"
                    name="author"
                    value={blogData.author}
                    onChange={handleInputChange}
                    required
                />
                <TextField
                    label="Blog Text"
                    fullWidth
                    multiline
                    rows={6}
                    margin="normal"
                    name="text"
                    value={blogData.text}
                    onChange={handleInputChange}
                    required
                />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="avatar-input"
                    type="file"
                    onChange={handleAvatarChange}

                />
                <label htmlFor="avatar-input">
                    <Button variant="contained" component="span">
                        Upload Avatar
                    </Button>
                </label>
                {avatarImage && (
                    <Avatar
                        src={URL.createObjectURL(avatarImage)}
                        alt="Avatar Preview"
                        style={{ width: 100, height: 100, margin: '10px 0' }}
                    />
                )}
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="blog-image-input"
                    type="file"
                    onChange={handleBlogImageChange}
                />
                <label htmlFor="blog-image-input">
                    <Button variant="contained" component="span" sx={{ marginLeft: '214px' }}>
                        Upload Blog Image
                    </Button>
                </label>
                {blogImage && (
                    <Card style={{ margin: '10px 0' }}>
                        <CardMedia
                            component="img"
                            alt="Blog Image Preview"
                            height="140"
                            image={URL.createObjectURL(blogImage)}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Blog Image Preview
                            </Typography>
                        </CardContent>
                    </Card>
                )}
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default BlogForm;
