import axios from 'axios'
import {urlBase} from '../constants/defaultValues'

const baseUrl = urlBase;

const loginService = (body) => axios.post(`${baseUrl}/auth`, body)

export default loginService
        
