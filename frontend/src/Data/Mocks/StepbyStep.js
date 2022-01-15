let steps = [
    {
      name: "Schritt 1",
      text: "Beschreibung suchen",
      number: 1,
    },
    {
        name: "Schritt 2",
        text:"Quiz machen",
        number: 2,
    },
    {
        name: "Schritt 3",
        text:"Rezept bekommen",
        number: 3,
    }
  ];

  export function getStep(number) {
    return steps.find(
      step => step.number === number
    );
  }

export function getSteps(){
    return steps;
}