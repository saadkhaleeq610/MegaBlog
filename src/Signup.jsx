import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import AuthService from './appwrite/auth'
import {Login} from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import {useForm} from "react-hook-form"

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const create = async(data) => {
        setError("")
        try {
            
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div>
      
    </div>
  )
}

export d, {useState}efault Signup
import {Link, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
