import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import useStyles from './styles'
import memories from '../src/images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import {getPosts} from '../src/actions/postsActions'


function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])
  return (
    <Container maxwidth= 'lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image}  src = {memories} alt = 'memories' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing = {3}>
            <Grid item xs = {12} sm = {7}>
                <Posts></Posts>
            </Grid>
            <Grid item xs = {12} sm = {4}>
                <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
  );
}

export default App;
