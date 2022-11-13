import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import useStyles from "./AuthStyles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import Icon from "./icon";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {signUp, signIn} from "../../actions/authActions"

const initialValues = {firstName: '', lastName: '',email: '', password: '', confirmPassword: ''}

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialValues)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    if(isSignUp){
        dispatch(signUp(formData, navigate))
    }else{
        dispatch(signIn(formData, navigate))

    }
  };

  const handleChange = (e) => {
    setFormData(state => ({...state, [e.target.name]: e.target.value}))
  };



  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj
    const token = res?.tokenId

    try {
        dispatch({type: 'AUTH', data: {result, token}})
        navigate('/')

    } catch (error) {
        console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign in was unsuccessful. Try again!");
  };

  const switchMood = () => {
    setIsSignUp((prevState) => !prevState);
    handleShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat password"
                handleChange={handleChange}
                type="password"
              ></Input>
            )}
          </Grid>
          <GoogleLogin
          clientId="153328035124-n6t59j5i163l8j38mbh0npfpdre1h5mp.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
              Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
          >      
          </GoogleLogin>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMood}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have anaccount? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
