import React, { useState } from "react";
import useStyles from './FormStyles'
import {TextField, Typography, Button, Paper} from '@material-ui/core'
import FileBase from  'react-file-base64'
const Form = () => {
    const classes = useStyles()
    const handleSubmit = (e) => {
        e.preventDafault()
    }
    const clear = () => {
        
    }
    const changeHandler = (e) => {
        setPostData(state => ({...state, [e.target.name]: e.target.value}))
    }
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tag: "", selectedFile: ''
    })

    return (
        <Paper className={classes.paper}>
        <form authocomplete="off" noValidate className={classes.form} onSubmit = {handleSubmit}>
        <Typography variant="h6">Creating a memory</Typography>
        <TextField name = "creator"  variant="outlined" label = "Creator" fullWidth value={postData.creator} onChange = {changeHandler}> </TextField>
        <TextField name = "title"  variant="outlined" label = "Title" fullWidth value={postData.title} onChange = {changeHandler}> </TextField>
        <TextField name = "message"  variant="outlined" label = "Message" fullWidth value={postData.message} onChange = {changeHandler}> </TextField>
        <TextField name = "tag"  variant="outlined" label = "Tags" fullWidth value={postData.tag} onChange = {changeHandler}> </TextField>
        <div>
            <FileBase type = "file" multiple = {false} onDone = {(base64) => setPostData({...postData, selectedFile: base64})}/>
        </div>
        <Button className = {classes.buttonSubmit} variant = "contained" color= "primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button  variant = "contained" color= "secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
        </Paper>
    )
}

export default Form