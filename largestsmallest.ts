const people = [1,2,3,4,5];
const max = people.reduce((a, b) =>Math.max(a, b));  
const min = people.reduce((a, b) =>Math.min(a, b)); 
console.log(Math.max(max));
console.log(Math.min(min));
