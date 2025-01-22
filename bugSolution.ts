function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Corrected output

// Example of handling a potential error:
try {
  console.log(greeter(user));
} catch (error) {
  console.error("Error: ", error);
}
