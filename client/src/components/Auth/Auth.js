import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import useStyles from './AuthStyles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import { useState } from 'react'
const Auth = () => {
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const state = null
    const isSignUp = true

    const handleShowPassword = () => setShowPassword(prevState => !prevState)

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <Container component='main' maxWidth ='xs' >
            <Paper className={classes.paper} elevation  = {3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit = {handleSubmit}>
                    <Grid container spacing = {2}>
                        {
                            isSignUp && (
                                <>
                                <Input name = 'firstName' label = 'First Name' handleChange = {handleChange} autoFocus half />
                                <Input name = 'lastName' label = 'Last Name' handleChange = {handleChange}  half />
                                </>
                            )}
                                <Input name = 'email' label = 'Email Address' handleChange = {handleChange}  type = 'email' />
                                <Input name = 'password' label = 'Password' handleChange = {handleChange} handleShowPassword = {handleShowPassword}  type = {showPassword ? 'text' : 'password'} />
                                {isSignUp && <Input name = 'confirm' label='Repeat password' handleChange={handleChange} type = 'password'></Input>}
                    </Grid>
                                <Button type = 'submit' fullWidth variant = 'contained' color = 'primary' className={classes.submit}>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                                
                </form>
            </Paper>
        </Container>
    )
}

export default Auth