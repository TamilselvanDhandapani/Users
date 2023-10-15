import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Datalist.css";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your API endpoint
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  
  return (
    <div className="users">
      <h1>Users List:</h1>
      <ul className="card">
      
       {data.map((item) => (
          <li  className="card-item" key={item._id}>
           <h4><b>Firstname:</b> {item.firstName}</h4>
            <p><b>Lastname: </b>  {item.lastName}</p>
            <p><b>Email:    </b>  {item.email}</p>
            <p><b>Contact:  </b>  {item.mobile} </p>
            <p><b>Gender:   </b>  {item.gender}</p>
            <p><b>Place:    </b>  {item.place}</p>
            <p><b>Date:    </b>  {item.date}</p>
          </li>
        ))}
      
      </ul>
    </div>
  );
}

export default Card;
