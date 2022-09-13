import axios from 'axios'






//get all actors
 const getActors = async () => {

    const response = await axios.get("api/v1/actors")
    console.log(response.data)

    return response.data.data

}

const actorsService = {
    getActors,
  }
  
  export default actorsService