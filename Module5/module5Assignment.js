var myDog = {
  "name" : "Brian",
  "breed" : "Labrador Retriever",
  "tvProgram" : "Family Guy",
  "mySound" : "I'm actually talking",
  "note" : "The family dog and equal family member; about the Griffins, a dysfunctional family.",
  "myGreeting" : function()
  {
    return `<p>Hey, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
    TV Show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.</p>`;

  }

};

document.getElementById("output1").innerHTML = myDog.myGreeting();

class dog {
  constructor(name, breed, tvProgram, mySound, note) {
    this.name = name,
    this.breed = breed,
    this.tvProgram = tvProgram,
    this.mySound = mySound,
    this.note = note
    }


    myGreeting()
    {
      return `<p>Hey, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV Show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}.</p>`;
    }
}

let bluey = new dog("Bluey", "Australian Cattle Dog", "Bluey", "I'm actually saying, Hey Bingo",
"A female anthropomorphic 6-year-old blue heeler puppy. She is curious and energetic.");

document.getElementById("output2").innerHTML = bluey.myGreeting();
