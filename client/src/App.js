import './App.css';
import {Container } from '@material-ui/core'
import useStyles from './styles'

import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import {getPosts} from '../src/actions/postsActions'
import {EditContext} from '../src/contexts/EditContext'
import NavBar from './components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  const changeId = (id) => {
  setCurrentId(id)
  }

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    
    <EditContext.Provider value= {{currentId, changeId}}>
     <Container maxwidth= 'lg'>
      <NavBar/>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/auth' element = {<Auth/>}></Route>
      </Routes>
      </Container>
    </EditContext.Provider>
   
  );
}

export default App;
