// Author: Naomy Tung
// Version 0.1

import axios from 'axios'

const API_URL = '/api/account/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Forget Password
const forgetPassword = async (userData) => {
  const response = await axios.post(API_URL + 'forgot-password', userData)

  return response.data
}

// Reset Password
const resetPassword = async (userData) => {

  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  const response = await axios.post(API_URL + 'reset-password', userData)

  return response.data
}

//Update User
const updateAccount = async (userData) => {
  const response = await axios.post(API_URL + 'update', userData)

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  forgetPassword,
  resetPassword,
  updateAccount,
}

export default authService