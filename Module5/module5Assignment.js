var myDog = {
  "name" : "brian",
  "breed" : "Labrador Retriever",
  "tvProgram" : "Family Guy",
  "mySound" : "I'm actually talking",
  "canTalk": true,
  "note" : "The family dog and equal family member; about the Griffins, a dysfunctional family.",
  "myGreeting" : function()
  {
    if(this.canTalk == true)
    var talkMessage = "I can talk!";
    else {
      var takMessage = "I can't talk!";
    }


    return `<p>Hey, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
    TV Show ${this.tvProgram}. My character was a ${this.breed}. In the show I was ${this.note}. In the show
    its emphesized, ${talkMessage}</p>`;

  }

};

document.getElementById("output1").innerHTML = myDog.myGreeting();

class dog {
  constructor(name, breed, tvProgram, mySound, canTalk, note) {
    this.name = name,
    this.breed = breed,
    this.tvProgram = tvProgram,
    this.mySound = mySound,
    this.canTalk = canTalk,
    this.note = note
    }


    myGreeting()
      {
        if(this.canTalk == true)
        var talkMessage = "I can talk!";
        else {
          var takMessage = "I can't talk!";
        }

      return `<p>Hey, my name is ${this.name}, when I bark ${this.mySound}. I starred in the
      TV Show ${this.tvProgram}. My character was a ${this.breed}. In the show
      its emphesized, ${talkMessage}. In the show I was ${this.note}.</p>`;
    }
}

let bluey = new dog("Bluey", "Australian Cattle Dog", "Bluey", "I'm actually saying, Hey Bingo", true,
"A female anthropomorphic 6-year-old blue heeler puppy. She is curious and energetic.");

document.getElementById("output2").innerHTML = bluey.myGreeting();

let courage = new dog("Courage", "Beagle", "Courage, The Cowardly Dog", "I'm actually saying, oooooouuuuu", true,
"About an anthropomorphic dog who lives with a married couple of elderly farmers in the middle of nowhere.");

let blue = new dog("Blue", "Generic", "Blue's Clues", "I'm actually saying, Hello", true,
"A program intended to get preschoolers to learn through active participation in activities grounded in their everyday lives.");

let text = "";

for(var item in blue)
  text += `<b>${item}:</b> ${blue[item]} <br>`

document.getElementById("output3").innerHTML = text

let dogList = [];

dogList.push(brian);
dogList.push(bluey);
dogList.push(courage);
dogList.push(blue);

dogList.forEach(dog => {
  for(var item in dog)
  console.log(`${item}: ${dog[item]}`)
  console.log("-----------------------");
});

function search()
{
  var searchTerm = document.getElementById("dogname").value;


var result = dogList.find(dog => dog.name == searchTerm);
}
if(result)
{
  text = "";

  for(var item in dog)
      text += `<b>${item}:</b> ${dog[item]} <br>`;


  document.getElementById("output4").innerHTML = text

  document.getElementById("output5").innerHTML = result.myGreeting();
}
else
{
  document.getElementById("output4").innerHTML = "<b>ERROR:</b>" + searchTerm + "was not found. Try again.";

}
