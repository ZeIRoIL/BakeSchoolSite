let categories = [{
    datasetId: "category",
    categoryId: 1,
    details: {
      name: "Allgemein",
      image: "/img/description/thumbnails/Allgemein.png",
      
      text: "Das Grundwissen für jeden Bäcker und Konditor.",
      difficultyLevel: 1,
      "difficultyLevelRange": [
        1,
        2
      ]
    }
  },{
    datasetId: "category",
    categoryId: 2,
    details: {
      name: "Getreide",
      image: "/img/description/thumbnails/Getreide.png",
      text: "Hier erfährst du das wichtigste über die Hauptzutat einer Bäckerei.",
      difficultyLevel: 2,
      difficultyLevelRange: [
        2,
        3
      ]
    }
  },{
    "datasetId": "category",
    "categoryId": 3,
    "details": {
      "name": "Schokolade",
      "image": "/img/description/thumbnails/MainSchokolade.png",
      "text": "Die Lieblingszutat von Kinder! Du willst schon immer wissen von wo unsere Schokolade kommt ? \n",
      "difficultyLevel": 1,
      "difficultyLevelRange": [
        1,
        2
      ]
    }
  },{
    datasetId: "category",
    categoryId: 1,
    details: {
      name: "Zucker",
      image: "/img/description/thumbnails/Zucker.png",
      "text": "In der Konditorei nicht weg zu denken. Hier erfährst du über die Gewinnung und die verschiedenen Arten des Zuckers.",
      "difficultyLevel": 1,
      "difficultyLevelRange": [
        1,
        2
      ]
    }
  }];

export function getCategories(){
    return categories;
}

// export function getCategories(number){
//     return categories.number.find(
//         categorie => categorie.number === number
//     );
// }