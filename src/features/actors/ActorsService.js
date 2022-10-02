
import axios from 'axios'
import authService from "../auth/AuthService"
import { logout } from '../auth/AuthSlice'







//get all actors
 const getActors = async (token , page) => {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
}


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhN2I0ZmE2LTEzYWQtNDYyMS1hYTQzLWEyYjY5NDYzZWQ0ZCIsImlhdCI6MTY2NDcwNDYzMiwiZXhwIjoxNjY0NzI2MjMyfQ.fi3VrXVETUrSYOocXDE4tv7kGF4Iy_dzr1AzoWQBcrc
    const response = await axios.get(`api/v1/admin/actors?paginate=10&page=${page}`, config)
    // console.log(response.data)

    // if(response.data.message === "jwt expired"){
    //     console.log("removed")
    //     localStorage.removeItem('user')
    // }
    // console.log("not removed")

    return response.data

}

const actorsService = {
    getActors,
  }
  
  export default actorsService