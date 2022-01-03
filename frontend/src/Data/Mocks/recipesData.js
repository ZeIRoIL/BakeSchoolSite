let recipes = [
  {
    name: "Gebrannte Mandeln",
    number: 1,
    ingredients:
      [
        { data: "Zucker", amount: "200g" },
        { data: "Vanillezucker", amount: "1 Stk." },
        { data: "Wasser", amount: "100ml" },
        { data: "Mandeln", amount: "400g" }
      ]
    ,
    due: "12/05/1995",
    description:
      [
        {
          step: 1,
          text: "Zuerst bringt man das Wasser mit dem ganzen Zucker in einer Pfanne zu kochen",
          hint:"undefined"
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
          ]
        }
      ]
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
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