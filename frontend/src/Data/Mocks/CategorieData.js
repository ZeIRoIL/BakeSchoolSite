let categories = [
    {
      name: "Zucker",
      number: 1,
    },
    {
        name: "Semmel",
        number: 2,
    },
    {
        name: "Brot",
        number: 3,
    },
    {
        name: "Getreide",
        number: 4,
    },
    {
        name: "Mehl",
        number: 5,
    }
  ];

export function getCategories(){
    return categories;
}

// export function getCategories(number){
//     return categories.number.find(
//         categorie => categorie.number === number
//     );
// }