import './App.css';
import {Container } from '@material-ui/core'
import useStyles from './styles'
import { GoogleOAuthProvider } from '@react-oauth/google';
import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import {getPosts} from '../src/actions/postsActions'
import {EditContext} from '../src/contexts/EditContext'
import NavBar from './components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import { gapi } from "gapi-script";

function App() {
  
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  const changeId = (id) => {
  setCurrentId(id)
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    // <GoogleOAuthProvider clientId="153328035124-n6t59j5i163l8j38mbh0npfpdre1h5mp.apps.googleusercontent.com">
    <EditContext.Provider value= {{currentId, changeId}}>
     <Container maxwidth= 'lg'>
      <NavBar/>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/auth' element = {<Auth/>}></Route>
      </Routes>
      </Container>
    </EditContext.Provider>
  //  </GoogleOAuthProvider>
  );
}

export default App;
