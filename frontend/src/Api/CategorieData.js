import axios from "axios";
import React from "react";

const api = axios.create({
    baseURL: 'https://localhost:5001/api/Category'
  })

  // Doesn not work it !!! 
  export default function CategorieData () {

    // Use axio for the API/Get
    api.get('/')
    .then(res => {
        console.log(res.data),
        items = res.data,
        isLoaded = true;
    })
    .then(
        (result) => {
            isLoaded = true;
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            error = error;
        }
       
    )
   
}