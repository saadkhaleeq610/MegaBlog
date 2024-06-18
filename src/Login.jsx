import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"
import {Login as authService} from "./store/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");
    return(
        <div>Login</div>
    )
}