import { useState, useEffect } from "react";
import axios from "axios";
import {useUser} from '../authContext'
import{Link} from 'react-router-dom'

function Continents(){
    const user=useUser()
    const[countries,setCountries]=useState('')
    const aux=["Asia","Europe","Oceania","Africa","North-America","South-America" ]
    async function cliclHandler(e){
        try {
            let res=await axios.get(`http://localhost:3001/statistics?search=${e.target.value}`,{ 
                headers: { authorization: "Bearer " + user.accessToken },
              })
              setCountries(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div>
            <div className="buttons_wrapper">
            {
             aux.map(cont=>(<button value={cont} onClick={cliclHandler}className='cont_button'>{cont}</button>))   
            }
            </div>
            <div className ="list_wrapper">
            <ul>
                {
                   countries && countries.map(country=>(<li className='list' key={country._id}><Link to={`details/${country._id}`}>
                        {country.country}
                        </Link></li>))
                }
            </ul>
            </div>
        </div>
    )
}

export default Continents
