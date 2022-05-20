let recipes = [
  {
    name: "Gebrannte Mandeln",
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
    number: 2,
    video: "fadfasdf",
    ingredients:
      [
        { data: "Ei", amount: "1" },
        { data: "Rohrzucker", amount: "100g" },
        { data: "Butter", amount: "60g" },
        { data: "Öl", amount: "50g" },
        { data: "Vanillezucker", amount: "20g" },
        { data: "Haferflocken fein", amount: "180g" },
        { data: "Dinkelmehl", amount: "180g" },
        { data: "Salz", amount: "1 Prise" },
        { data: "Backpulver", amount: "1/2 Päckchen" },
        { data: "Zimt", amount: "2 Prise" },
      ]
    ,
    description:
      [
        {
          step: 1,
          text: "Zutaten in mehreren Schüsseln vorbereiten. ",
          hint:"undefined",
          image: "/recipes/Hanfkekse/Zutaten.jpg"
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
          image: "/recipes/Hanfkekse/Schritt1.png"
        },
        {
          step: 4,
          text: "Danach die 60g Zimmerwarme Butter nach und nach dazugeben und weiter rühren lassen",
          hint:"undefined",
          image: "/recipes/Hanfkekse/Schritt2.png"
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