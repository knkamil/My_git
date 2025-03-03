//Object
const employee = {
    id: 1,
    name:"Khadija Kamil",
    age: 34,
    department:"Fullstack developer",
    address: {
        city:"Kumasi",
        country:"GH",
    }
};


const {address: {city}}= employee;
console.log(city);

const {name: fullName, age} = employee;

console.log(fullName);
console.log(age);


//functions
function displayEmployee(employee){
    console.log(`The employee's name is ${employee.name} and age is ${employee.age}`);
}

displayEmployee({employee});

function displayEmployee({name, age}){
    console.log(`The employee's name is ${employee.name} and age is ${employee.age}`);
}

displayEmployee(employee);

const users = [
    ["Khadija", "Kamil"],
    ["Naima", "Osmanu"],
    ["Aishatu", "Jafaru"]
];

//Higher order functions
// const userObj = users.map((user) => {
//     return {firstName: user[0], lastName: user[1]};
// });

// console.log(userObj);

// const userObj = users.map(([firstName, lastName]) => {
//     return {firstName: firstName, lastName: lastName};
// });

// console.log(userObj);

const userObj = users.map(([firstName,lastName]) => {
    return {firstName, lastName};
});

console.log(userObj);

//All the three codes above give the same results



