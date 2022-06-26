let recipes = [
  {
    name: "Gebrannte Mandeln",
    thumbnail : "/img/recipes/GebrannteMandeln/mainMandeln.jpg",
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
          image: "/img/recipes/GebrannteMandeln/schritt1.PNG"
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
          image: "/img/recipes/GebrannteMandeln/schritt2.jpg"
        }
      ]
  },
  {
    name: "Haferkekse",
    thumbnail : "/img/recipes/Hanfkekse/main.jpg",
    number: 2,
    video: "oITDcIjJBlY",
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
          image: "/img/recipes/Hanfkekse/Schritt6.png"
        },
        {
          step: 7,
          text: "Den fertigen Teig kann man am besten mit einen Eisportionierer auf ein Blech, das mit Backpapier belegt ist, aufteilen. ",
          hint:"Die Kekse laufen nicht stark auseinander daher muss man nicht so viel abstand lassen!",
          image: "/img/recipes/Hanfkekse/Schritt7.png"
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
  },
  {
    name: "Frühstücks Croissant",
    thumbnail : "/img/recipes/Croissant/mainCroissant.jpg",
    number: 3,
    video: "fadfasdf",
    ingredients:
      [
        { data: "Mehl W700", amount: "520g" },
        { data: "Milch", amount: "200g" },
        { data: "Hefe", amount: "35g" },
        { data: "Zucker", amount: "12g" },
        { data: "Butter", amount: "250g" },
        { data: "Eier", amount: "75g" },
        { data: "Salz", amount: "7g" },
      ]
    ,
    description:
      [
        {
          step: 1,
          text: "35g Hefe mit 200g kalter Milch aufschlämmen.",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt1.PNG"
        },
        {
          step: 2,
          text: "Mit allen restlichen Zutaten(12g Zucker, 50g Butter, 75g Ei, 7g Salz, 500g Mehl)mischen und ca. 3 Minuten kneten.",
          image: "/img/recipes/Croissant/schritt2.jpg"
        },
        {
          step: 3,
          text: "Anschließend 15 Minuten ruhen lassen. ",
          hint:"undefined",
          image: ""
        },
        {
          step: 4,
          text: "225g Fettziegel mit etwas 25g Mehl (10%) glatt arbeiten und ausrollen. ",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt4.PNG"
        },
        {
          step: 5,
          text: "Den rechteckigen Fettziegel kühl stellen ",
          hint:"undefined",
          image: ""
        },
        {
          step: 6,
          text: "Den Grundteig auf ein Rechteck ausrollen, sodass der Teig doppelt so groß ist wie der Fettziegel, damit man ihn einschlagen kann.",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt6.JPG"
        },
        {
          step: 7,
          text: "Ausrollen, für die erste „einfache“ Tour: Dazu faltet man den Teig zu 1/3 ein und legt das restliche Drittel darauf! / Es sieht ungefähr aus wie ein S und hat 3 Fettschichten ",
          hint: [{
            step: 1,
            text: "Wichtig ist das zwischen den Schichten nicht zu viel Mehl eingearbeitet wird, also dazwischen öfters abkehren!"
          }
          ],
          image: "/img/recipes/Croissant/schritt7..JPG"
        },
        {
          step: 8,
          text: "Bei der Zweiten Tour macht man eine Doppelte Tour / Dazu rollt man den Teig wieder länglich aus und faltet circa ¾ des Teiges, danach faltet man das restliche Viertel bis zu dem Ende des Anderen ungefalteten Teiges, zum Schluss faltet man das nochmal ganz zusammen. / Dadurch sind 4 Schichten zu sehen",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt8.JPG"
        },
        {
          step: 9,
          text: "Den Teig nach dem fertigen Tourieren einkühlen ca. 30 Minuten. (der Teig muss sich entspannen)",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt9.JPG"
        },
        {
          step: 10,
          text: "Danach kann man den Teig auf ca. 3mm dünn ausrollen à mit einem Lineal jeweils 10 cm ausmessen und zu Streifen schneiden, diese Streifen diagonal durchschneiden so entstehen Dreiecke diese zu Croissant aufrollen und aufs Blech wegsetzen. ",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt10..JPG"
        },
        {
          step: 11,
          text: "Stückgare: Die Fertig geformten Teiglinge müssen nun an einen Warmen Platz ca. 45 Minuten aufgehen lassen. Damit sich keine Haut bildet und der Teig einreist, die Croissants mit Wasser besprühen und eine Folie darauflegen ",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt11.PNG"
        },
        {
          step: 12,
          text: "Sobald die Croissant deutlich größer sind, in den Vorgeheizten Backofen bei 200°C für ca. 25 Minuten Backen  ",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt12.jpg"
        },
        {
          step: 13,
          text: "Raus aus den Ofen und Genießen",
          hint:"undefined",
          image: "/img/recipes/Croissant/schritt13.jpg"
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