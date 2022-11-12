import React, { useContext, useEffect, useState } from "react";
import useStyles from './FormStyles'
import {TextField, Typography, Button, Paper} from '@material-ui/core'
import FileBase from  'react-file-base64'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/postsActions";
import { EditContext } from "../../contexts/EditContext";

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {currentId, changeId} = useContext(EditContext)
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector(state => currentId ? state.posts.find(post => post._id == currentId) : null)
   
    useEffect(() => {
        
        if(post) {
            setPostData(post)
        }
    }, [post])

    const changeHandler = (e) => {
        if(e.target.name == 'tags'){
        setPostData(state => ({...state, [e.target.name]: e.target.value.split(',')}))
        return
        }
        setPostData(state => ({...state, [e.target.name]: e.target.value}))
    }

    const validator = (postData) => {
    let flag = false
    for(let i of Object.values(postData)){
        if(!i){
        flag = true
        }
    }
        return flag
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(validator(postData)){
            return
        }
       

        if(currentId) {
            dispatch(updatePost(currentId, postData))
            clear()
        }else{
            dispatch(createPost(postData))
            clear()
        }
    
    }
    const clear = () => {
        changeId(null)
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
        
    }

    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
        <Typography variant="h6">{ currentId ? 'Editing' : 'Create'} a memory</Typography>
        <TextField name = "creator"  variant="outlined" label = "Creator" fullWidth value={postData.creator} onChange = {changeHandler}> </TextField>
        <TextField name = "title"  variant="outlined" label = "Title" fullWidth value={postData.title} onChange = {changeHandler}> </TextField>
        <TextField name = "message"  variant="outlined" label = "Message" fullWidth value={postData.message} onChange = {changeHandler}> </TextField>
        <TextField name = "tags"  variant="outlined" label = "Tags" fullWidth value={postData.tags} onChange = {changeHandler}> </TextField>
        <div className={classes.fileInput}>
            <FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}/>
        </div>
        <Button className = {classes.buttonSubmit} variant = "contained" color= "primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  variant = "contained" color= "secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    )
}

export default Form