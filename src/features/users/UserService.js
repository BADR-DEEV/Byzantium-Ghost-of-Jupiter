import axios from 'axios'







const getUsers = async (token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get("api/v1/admin/users", config)
    return response.data.data
}



const userService = {
    getUsers
}

export default userService