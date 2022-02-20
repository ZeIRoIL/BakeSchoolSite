import axios from "axios";


const api = axios.create({
    baseURL: 'https://localhost:5001/api/Category'
  })

  

  export async function CategorieData () {

   // Use axio for the API/Get
   return new Promise((resolve, reject) => api.get("/")
   .then(res => resolve(res.data))
   .catch(e => reject(new Error(e))));
        
}