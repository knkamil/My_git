//Array
// const fruits = ["apple", "mango", "banana", "pineapple","orange"];
// const apple = fruits[0];
// const mango = fruits[1];
// console.log(apple);
// console.log(mango);

// const [m, n] = fruits//any name at all can be used to represent the items in the array 
// console.log(m);
// console.log(n);


// const [fruit1, ,fruit3,...rest]=  fruits;//use an empty space if you want to skip an index
// console.log(fruit1);
// console.log(fruit3);
// console.log(rest); //prints the rest of the items in the array


//Arrays and Objects
// const groceryList = [
//     {item: "Apples", price: 25, category: "fruits"},
//     {item: "Mangoes", price: 35, category: "fruits"},
//     {item: "Tomatoes", price: 15, category: "vege"},
//     {item: "Milk", price: 20, category: "misc"},
//     {item: "Bread", price: 12, category: "misc"},
//     {item: "Eggs", price: 18, category: "misc"}
// ];

// console.log(groceryList[0].item);
// const[{category}]= groceryList;//Use the key name itself
// console.log(category);

// // const [,,,,item] = groceryList;
// // console.log(item);

// const [,,{item},...rest]= groceryList;
// console.log(item);
// console.log(rest);

// const company = {
//     name: "Google",
//     location: ["Singapore", "India", "Germany"],
// };

// const {location:[loci]} = company;
// console.log(loci);

// const {location:[,,last],}= company;
// console.log(last)

