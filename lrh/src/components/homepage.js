import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function DataFetching(){
    const [data, setdata] = useState([])
    const dataFetching =()=>{
        Axios.get('https://restcountries.com/v2/all').then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(()=>{
        dataFetching()
    },[])

    return (
        <div>
            <table>        
                <tr>
                    <td>Name</td>
                    <td>Capital</td>
                </tr>
                {
                    data.map((i)=>{
                        return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.capital}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}