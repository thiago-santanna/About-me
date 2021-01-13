import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://localhost:3333'
})

export default api
