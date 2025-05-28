import readline from "node:readline";

export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter(x => x !== "");
  return splitInput
}

type readlineInterface = readline.Interface;

function newREPL(): readlineInterface {return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Pokedex >> `,
})};

export function startREPL() {
  const r1 = newREPL();
  r1.prompt();
  r1.on('line', (input) => {
    const cleanedInput = cleanInput(input);
    if (cleanedInput.length > 0) {
      console.log(`Your command was: ${cleanedInput[0].toLowerCase()}`)
    }
    r1.prompt()
  })
}