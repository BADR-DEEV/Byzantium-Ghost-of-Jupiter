import axios from 'axios'






//get all movies
 const getGenres = async () => {

    const response = await axios.get("api/v1/genres")
    console.log(response.data.data)

    return response.data.data

}

const genreService = {
    getGenres,
  
  }
  
  export default genreService