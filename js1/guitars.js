//Modules
const playGuitar = () => {
    return "Playing guitar!";
};

const shredding = () => {
    return "Shredding some licks!";
};

const plucking = () => {
    return "Plucking some strings...";
};

export default playGuitar;// this is the default export
export {shredding, plucking}; //these are also exports

//Another way
// export default function playGuitar () {
//     return "Playing guitar!";
// };

// export const shredding = () => {
//     return "Shredding some licks!";
// };

// export const plucking = () => {
//     return "Plucking some strings...";
// };

