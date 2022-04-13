import Axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export const currency = (obj) => {
    const { currencies } = obj;
    return currencies?.length ? obj?.currencies?.[0]?.name : '';
}

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
                    <td>Currency</td>
                </tr>
                {
                    data.map((i)=>{
                        return(
                            <tr>
                                <td>{i.name}</td>
                                <td>{i.capital}</td>
                                <td>{currency(i)}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}