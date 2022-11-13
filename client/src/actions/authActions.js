import * as api from '../api'
import { LOGOUT, AUTH} from '../constants/actionTypes'


export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {

        navigate('/')

        
    } catch (error) {
        console.log(error);
    
    }
}