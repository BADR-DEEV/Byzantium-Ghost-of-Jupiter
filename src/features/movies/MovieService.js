import { baseUrl } from "../../constants/config"
import axios from 'axios'



const getMovies = async () => {

  

    const response = await axios.get("http://smdb.sadeem-lab.com/api/v1/movies")
    return response.data
 
    

}

const movieService = {
    
    getMovies,

  }

  export default movieService