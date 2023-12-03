import Typography from '@mui/material/Typography';
import Container, { containerClasses } from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/system/Unstable_Grid';
import Blogcard from './BlogCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


import { getBlogsFromMongoResponse } from '../redux/blogSlice'


export default function Blogs() {

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            try {
                //this is fetching all pets (of a user) from DB
                const response = await axios.get('http://localhost:3000/getblogs');

                //sending the response (all pets) to REDUX
                dispatch(getBlogsFromMongoResponse(response.data));
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchData();
    })

    //getting list of pets from REDUX
    const Blogs = useSelector(state => state.blogs.blogs);


    return (
        <>
            {/*Box Layout used to represent the main image of page */}
            <Box sx={{
                display: 'flex', height: '500px', justifyContent: 'center', alignItems: 'center', backgroundSize: 'cover',
                position: 'relative', backgroundRepeat: 'no-repeat', backgroundImage: 'linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)),url( "src/assets/BlogCover.jpg")',
                marginTop: '50px', backgroundAttachment: 'fixed'
            }}>
                <Typography variant='h3' sx={{ color: 'white', marginBottom: '140px' }}>PET BLOGS</Typography>
            </Box>
            {/*Container Layout used to represent Article heading */}
            <Container maxWidth='lg'>
                <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '20px' }}>ARTICLES</Typography>
            </Container>
            {/*Grid Layout used to represent cards of Blogs */}
            <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'row' }}>

                {Blogs.map((blog) => (



                    <Blogcard
                        key={blog.id} // Make sure to provide a unique key for each item in the array
                        id={blog.id}
                        cardText={blog.description}
                        authorName={blog.authorname}
                        Title={blog.title}
                        cardmedia="src/assets/cardimage.jpg"
                        userimage="src/assets/user4.jpg"
                    />



                ))}

            </Grid>
            {/* <Box my={4}>
                <Pagination count={10} sx={{ display: 'flex', justifyContent: "center" }} />
            </Box> */}
        </>
    )

}
