import React, {useEffect, useState} from "react";
import axios from "axios";

function Clients() {
    const [data, setData]= useState([])
    useEffect(()=>{
       axios.get('http://127.0.0.1:8000/api/clientprofile') 
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    }, [])

  return (
    <div className="container">
        <div className="mt-3">
            <h3>Clients Profiles</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((clientprofile, index) =>{
                            return <tr key={index}>
                                <td>{clientprofile.ID}</td>
                                <td>{clientprofile.Name}</td>
                                <td>{clientprofile.Category}</td> 
                            </tr>

                        })
                    }
                </tbody>
            </table>

        </div>


    </div>
  );
}

export default Clients;