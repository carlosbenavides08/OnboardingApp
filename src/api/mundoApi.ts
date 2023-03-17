import axios from 'axios'
import { API_URL } from '@env'

const mundoApi = axios.create({
    baseURL: API_URL
})

export default mundoApi