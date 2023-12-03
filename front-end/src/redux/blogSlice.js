import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blogs",
    initialState: {
        blogs: []
    },
    reducers: {
        getBlogsFromMongoResponse: (state, action) => {
            //populating array of blogs with response
            state.blogs = action.payload.map(blog => {
                //creating and returning a blog object to push onto redux blogs array
                return { id: blog._id, title: blog.title, description: blog.description, authorname: blog.authorname }
            })
        },
        addBlog: (state, action) => {
            state.blogs.push(action.payload)
        },
        selectBlogById: (state, action) => {
            const blogId = action.payload;
            state.selectedBlog = state.blogs.find(blog => blog.id === blogId);
        },
    }
});

export const { addBlog, getBlogsFromMongoResponse, selectBlogById } = blogSlice.actions;
export default blogSlice.reducer;
