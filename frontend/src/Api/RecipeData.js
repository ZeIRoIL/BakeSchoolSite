import axios from "axios";


const api = axios.create({
    baseURL: 'https://localhost:5001/api/Recipe'
  })
 
export function getRecipes() {

        // Use axio for the API/Get
        return new Promise((resolve, reject) => api.get("/")
        .then(res => resolve(res.data))
        .catch(e => reject(new Error("Fehler bei API-Request"))));
}

export function getRecipe(number) {

        return new Promise((resolve, reject)=> api.get(`/${number}`)
        .then(res => resolve(res.data))
        .catch((e) => {
          console.log(res.data)
          reject(new Error("Fehler bei API-Request"))
        }))

        
        
        // return recipes.find(
        //     recipe => recipe.Number === number
        //   );
}
