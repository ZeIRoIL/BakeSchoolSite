let steps = [
    {
      name: "Schritt 1",
      text: "Dast ist der Text1",
      number: 1,
    },
    {
        name: "Schritt 2",
        text:"Das ist der Text2",
        number: 2,
    },
    {
        name: "Schritt 3",
        text:"Das ist der Text 3",
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