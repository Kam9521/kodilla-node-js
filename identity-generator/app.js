const fs = require("fs");

const genders = ["M", "F"];

const maleNames = ["John", "Michael", "David", "James", "Robert"];

const femaleNames = ["Anna", "Emma", "Sophia", "Olivia", "Emily"];

const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Wilson"];

function randChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const people = [];

for (let i = 0; i < 20; i++) {
  const gender = randChoice(genders);

  const person = {
    gender: gender,
  };

  if (gender === "M") {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 61) + 18;

  people.push(person);
}
const peopleJSON = JSON.stringify(people, null, 2);

fs.writeFile("people.json", peopleJSON, (err) => {
  if (err) {
    console.log("Something went wrong");
    return;
  }

  console.log("File has been successfully generated! Check people.json");
});
