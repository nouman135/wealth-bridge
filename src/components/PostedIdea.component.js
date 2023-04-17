import React, {useEffect, useState} from "react";
import axios from "axios";
import "./table.css"
import Taguser from "./taguser.component";

function PostedIdea() {
    const [data, setData]= useState([])
    useEffect(()=>{
       axios.get('http://127.0.0.1:8000/api/posts') 
       .then(res => setData(res.data))
       .catch(err => console.log(err))
    }, [])

  return (
    <div className="container">
        <div className="mt-3">
            <h3>Posted Ideas</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Tag users </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((posts, index) =>{
                            return <tr key={index}>
                                <td>{posts.id}</td>
                                <td>{posts.title}</td>
                                <td>{posts.category}</td> 
                                <td>{posts.description}</td> 
                                <td><Taguser /></td> 
                               
                            </tr>

                        })
                    }
                </tbody>
            </table>

        </div>


    </div>
  );
}

export default PostedIdea;