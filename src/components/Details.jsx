import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import {useUser} from '../authContext'
// import Cases from "./Cases";
// import Deaths from "./Deaths";

function Details(){
    const user=useUser()
    const [render,setRender]=useState(null)
    let {countryId}=useParams()
    useEffect(()=>{
        let getData= async ()=>{
            try {
                let res=await axios.get(`http://localhost:3001/statistics/${countryId}`,{ 
                    headers: { authorization: "Bearer " + user.accessToken },
                  })  
                setRender(res.data)  
            } catch (error) {
                console.log(error)
            }
        }
        
        getData()

    },[countryId,user.accessToken])
    return (
        <div className='details wrpaer'>
            {
            render?(
                <div>
                    <h2>{render.country}</h2>
                    <p>Continent: {render.continent}</p>
                    <p>Population: {render.population}</p>
                    <p>New Cases: {render.cases.new}</p>
                    <p>Critical Cases: {render.cases.critical}</p>
                    <p>People Recovered: {render.cases.recovered}</p>
                    <p>Active Cases: {render.cases.active}</p>
                    <p>Total Cases: {render.cases.total}</p>
                    <p>New Deaths: {render.deaths.new}</p>
                    <p>Total Deaths: {render.deaths.total}</p>
                    <p>Population tested : {render.tests.total}</p>
                </div>
            ):(<p>Loding</p>)
            }

        </div>
    )
}
export default Details