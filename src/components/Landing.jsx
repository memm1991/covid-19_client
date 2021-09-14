import {useUser} from '../authContext'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Continents from './Continents'


function Landing(){
    const history=useHistory()
    const user=useUser()
    return(
        <div>{
            user.accesToken?<Continents/>:history.push('/login')
            }</div>
    )
}

export default Landing