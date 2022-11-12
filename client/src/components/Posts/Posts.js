import React from "react";
import Post from "./Post/Post";
import useStyles from '../Posts/PostsStyle'
import { useSelector } from "react-redux";
import {Grid, CircularProgress} from "@material-ui/core"

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    
    const classes = useStyles()
    return (
       !posts.length ? <CircularProgress/> :( 
       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map(post => (
                <Grid key={post._id}>
                    <Post post={post}/>
                </Grid>
            ))}
       </Grid>
       ) 
    )
}

export default Posts