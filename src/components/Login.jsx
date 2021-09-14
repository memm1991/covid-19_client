import axios from "axios";
import {useLogin}from '../authContext'
import {useState} from 'react'
import { useHistory } from "react-router-dom";

function Login(){
    const setLogin=useLogin()
    const history=useHistory();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

   async function handleSubmit(e){
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3001/auth/login", { username, password });
        setLogin(res.data)
        history.push('/Landing')

    } catch (error) {
        console.log(error)
    }
    }

    return(
        <div className='form_wrapper'>
        <form onSubmit={handleSubmit}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
            </form>
            </div>
    )
}
export default Login