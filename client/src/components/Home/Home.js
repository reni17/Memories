import {Container, Grow, Grid} from '@material-ui/core'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'


const Home = () => {
    
    return(
        <Grow in>
        <Container>
          <Grid container  justifyContent='space-between' alignItems='stretch' spacing = {3}>
            <Grid item xs = {12} sm = {7}>
                <Posts></Posts>
            </Grid>
            <Grid item xs = {12} sm = {4}>
                <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home