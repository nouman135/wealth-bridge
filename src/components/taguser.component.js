import React, {useEffect, useState} from "react";
import axios from "axios";
import "./table.css"

function Taguser() {
    const [data, setData]= useState([])
    useEffect(()=>{
       axios.get('http://127.0.0.1:8000/api/clientprofile') 
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    }, [])

  return (
    <div className="container">
        <select>
          {
                        data.map((clientprofile,) =>{
                            return <option> {clientprofile.Name}</option>

                        })
          }
        </select>
    </div>
         
  );
}

export default Taguser;