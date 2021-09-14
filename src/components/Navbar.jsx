import { useHistory } from "react-router"
import {useState} from 'react'
import {useUser} from '../authContext'
import axios from "axios"


function Navbar(){
    const[input,setInput]=useState('')
    const user=useUser()
    const history=useHistory()

    function handlerOnChange(e){
        setInput(e.target.value)
    }

    async function handlerSubmit(e){
        e.preventDefault();
        try {
            let res=await axios.get(`http://localhost:3001/statistics?name=${e.target.value}` ,{ 
                headers: { authorization: "Bearer " + user.accessToken },
              })
              if(res.data){
                  console.log(res.data)
                  history.push(`/details/${res.data._id}`)
              }
              else{
                  alert('Country not Found, please make sure the spelling is right')
              }
            
        } catch (error) {
            console.log(error)
        }

    }
    
    function homeClick(){
       history.push('/Landing')
    }
    return (
        <div className='navbar'>
            <form onSubmit={handlerSubmit}>
            <input type="text" placeholder='Search' value={input} onChange={handlerOnChange}/>
            <button type='submit'>Search</button>
            </form>
           <button onClick={e=>homeClick()}>Home</button>
        </div>
    )
}
export default Navbar