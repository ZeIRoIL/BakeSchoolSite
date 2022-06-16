let recipes = [
  {
    name: "Gebrannte Mandeln",
    thumbnail : "/img/recipes/Hanfkekse/main.jpg",
    number: 1,
    video: "fadfasdf",
    ingredients:
      [
        { data: "Zucker", amount: "200g" },
        { data: "Vanillezucker", amount: "1 Stk." },
        { data: "Wasser", amount: "100ml" },
        { data: "Mandeln", amount: "400g" }
      ]
    ,
    description:
      [
        {
          step: 1,
          text: "Zuerst bringt man das Wasser mit dem ganzen Zucker in einer Pfanne zu kochen",
          hint:"undefined",
          image: "/static/media/logo.6ce24c58.svg"
        },
        {
          step: 2,
          text: "Danach kommen die ganzen Mandeln dazu und rührt ständig um!",

          hint: [{
            step: 1,
            text: "Bis die Mandeln so einen weißen „Schleier“ um sich haben und kein flüssiger Zucker mehr in der Pfanne ist!"
          },
          {
            step: 2,
            text: "Die Mandeln sollten wieder ein wenig zu glänzen anfangen und danach auf ein Blech herausputzen und auseinander geben und auskühlen lassen"
          }
          ],
          image: "/static/media/logo.6ce24c58.svg"
        }
      ]
  },
  {
    name: "Haferkekse",
    thumbnail : "/img/recipes/Hanfkekse/main.jpg",
    number: 2,
    video: "fadfasdf",
    ingredients:
      [
        { data: "Ei", amount: "1 Stk." },
        { data: "Rohrzucker", amount: "100g" },
        { data: "Butter", amount: "60g" },
        { data: "Öl", amount: "50g" },
        { data: "Vanillezucker", amount: "20g" },
        { data: "Haferflocken fein", amount: "180g" },
        { data: "Dinkelmehl", amount: "180g" },
        { data: "Salz", amount: "1 Prise" },
        { data: "Backpulver", amount: "1/2 Päckchen" },
        { data: "Zimt", amount: "2g" },
      ]
    ,
    description:
      [
        {
          step: 1,
          text: "Zutaten in mehreren Schüsseln vorbereiten. ",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt1.jpg"
        },
        {
          step: 2,
          text: "Backofen auf 175°C vorheizen.",

          hint:"undefined",
          image: "undefined"
        },
        {
          step: 3,
          text: "1 Ei und den 100g Zucker + 20g Vanillezucker+ 1Prise Salz schaumig schlagen",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt3.png"
        },
        {
          step: 4,
          text: "Danach die 60g Zimmerwarme Butter nach und nach dazugeben und weiter rühren lassen",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt4.png"
        },
        {
          step: 5,
          text: "50g Öl eingießen",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt5.png"
        },
        {
          step: 6,
          text: "Alle trockenen Zutaten (180g Haferflocken, 180g Dinkelmehl, ½ Backpulver, Zimt) unterrühren. ",
          hint:"undefined",
          image: "static/media/pic1.abcdf183.jpg"
        },
        {
          step: 7,
          text: "Den fertigen Teig kann man am besten mit einen Eisportionierer auf ein Blech, das mit Backpapier belegt ist, aufteilen. ",
          hint:"Die Kekse laufen nicht stark auseinander daher muss man nicht so viel abstand lassen!",
          image: "Assets/img/recipes/Hanfkekse/Schritt7.png"
        },
        {
          step: 8,
          text: "Die Kekse in das vorgeheizte Backrohr geben und bei 175°C circa 15 Minuten backen. ",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt8.jpg"
        },
        {
          step: 9,
          text: "Wenn die Kekse ausgekühlt sind kann man sie je nach Wunsch noch mit Schokolade verzieren oder in Schokolade eintauchen!",
          hint:"undefined",
          image: "/img/recipes/Hanfkekse/Schritt9.jpg"
        }
      ]
  }
];

export function getRecipes() {
  return recipes;
}

export function getRecipe(number) {
  return recipes.find(
    recipe => recipe.number === number
  );
}
// export function deleteInvoice(number) {
//   invoices = invoices.filter(
//     invoice => invoice.number !== number
//   );
// }