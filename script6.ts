let variable_1: string = "777";

let parsed_variable_one: number = <number>variable_1;

let parsed_variable_two: number = parseInt(variable_1);

console.log("In the first attempt: ", variable_1);
console.log("When parsed: ", parsed_variable_one);
console.log("When parsed using parseInt: ", parsed_variable_two);