/* const calculateAverage = (grad, ...numbers) => {
  let sum = 0;
  numbers.forEach((num) => (sum += num));
  const average = sum / numbers.length;
  return `the average ${grad} is ${average}`;
};
console.log(calculateAverage("test", 0, 100, 200, 300));
 */
/* 
const team = {
  name: "code of duty",
  couch: "Mahmoud",
  players: ["sherry", "herbert", "marge", "Andrew", "test"],
};
const printTeam = (teamName, coach, ...Players) => {
  return `
        Team Name: ${teamName},
        coach: ${coach},
        Players: ${Players.join(", ")}
        `;
};

console.log(printTeam(team.namem, team.couch, ...team.players)); */

// colne arraye
/* 
const numbers = ["one", "two", "three"];

const numbersCopy = [...numbers, "four"];
console.log(numbers);
console.log(numbersCopy); */

/* let numbers = ["one", "two", "three"];

numbers = [...numbers, "four"];
console.log(numbers); */

/* et house = {
  bedRooms: 2,
  bathRooms: 1.5,
  yeaerBuilt: 2018,
};

let newHouse = {
  ...house,
  test: "test",
};

newHouse.yeaerBuilt = 2020;

let person = {
  name: "mahmoud",
  age: 18,
};

let locationn = {
  city: "Syria",
  country: "Damascuse",
};

let overview = { ...person, ...locationn };
console.log(overview); */

let todos = {
  id: "asdqwiohu8ibhte",
  text: "pay the bills",
  completed: false,
};

const { id: todoid, completed, details = "no details ", ...others } = todos;

console.log(todoid);
console.log(completed);
console.log(details);
console.log(others);

const ages = [60, 50, 20, 48];

const [firstAge, secondAge = 1, ...otherAges] = ages;

console.log(testnum);
console.log(secondName);

const printTodo = ({ text, completed }) => {
  console.log(`${text}: ${completed}`);
};

printTodo(todos);
