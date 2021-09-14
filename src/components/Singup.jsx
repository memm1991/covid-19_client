import axios from "axios";
import {useState} from 'react'
import { useHistory } from "react-router-dom";


function Signup(){
    const history=useHistory();
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

   async function handleSubmit(e){
    e.preventDefault();
    try {
         await axios.post("http://localhost:3001/auth/signup", { username, password });
         history.push('/login')
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
              Singup
            </button>
            </form>
            </div>
    )
}
export default Signup