import React, { useContext } from "react";
import useStyles from '..//Post/PostStyles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHoriztIcon from  "@material-ui/icons/MoreHoriz"
import moment from "moment"
import { EditContext } from "../../../contexts/EditContext";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/postsActions";

const Post = (props) => {
    const post = props.post
    const classes = useStyles()
    const {changeId} = useContext(EditContext)
    const dispatch = useDispatch()
    
    const idHandler = () => {
         changeId(post._id)

        
    }
    return (
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image= {post.selectedFile} title = {post.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style = {{color: "white"}} size = "small" onClick={() => idHandler()}>
                    <MoreHoriztIcon fontSize = "medium"></MoreHoriztIcon>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography  variant = "h6" color = "textSecondary">{post.tags && post.tags.map(el => `#${el} `)}</Typography>
            </div>
            <Typography className={classes.title} variant = "h5" gutterBottom>{post.title}</Typography>
            <CardContent>

                <Typography  variant = "h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size= "small" color="primary" onClick={() => dispatch(likePost(post._id))}> <ThumbUpAltIcon fontSize = 'small'> </ThumbUpAltIcon>Like {post.likeCount}</Button>
               
                <Button size= "small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize = 'small'></DeleteIcon>Delete</Button>

            </CardActions>

        </Card>
        )
}

export default Post