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