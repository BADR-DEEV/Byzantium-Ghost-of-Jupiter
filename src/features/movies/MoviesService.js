import axios from 'axios'






//get all movies
 const getMovies = async () => {

    const response = await axios.get("api/v1/movies")
    console.log(response.data)

    return response.data.data

}

const movieService = {
    getMovies,
  }
  
  export default movieService