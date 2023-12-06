import axios from 'axios'

const API_URL = '/users/'

//Register user
const register = async (userData) => {
    //console.log(userData)
    const response = await axios.post("http://localhost:5000/users/", userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//Login user
const login = async (userData) => {
    //console.log(userData)
    const response = await axios.post("http://localhost:5000/users/login", userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = async() => {
    localStorage.removeItem('user')
}

const authService = {
    register, logout, login
}

export default authService