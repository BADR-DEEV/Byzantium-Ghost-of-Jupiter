import { baseUrl } from "../../constants/config"
import axios from 'axios'
import setAuthToken from "../../utils/setAuthToken"






const login = async (formData) => {

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
            "Access-Control-Allow-Origin": "*"
        }
    }
    const response = await axios.post("api/v1/web-login", formData, config).then(res => {

        if (res) {
            localStorage.setItem('user', JSON.stringify(res.data.token))
            setAuthToken(res.data.token)
            console.log(res)
        }
        return res
    })
    return response}



const logout = () => {
    localStorage.removeItem('user')
    setAuthToken("")
}





const AuthService = {

    login,
    logout

}

export default AuthService