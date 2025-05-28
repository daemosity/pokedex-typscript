import readline from "node:readline";
import { getCommands } from "./command_reg.js";
import { CLIRegistry } from "./command.js";

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

function outputSpacer(boundary: string = "") {
  console.log(boundary);
};

function handleCommands(input: string[], commands: CLIRegistry) {

    if (input.length > 0) {
      outputSpacer()

      const [command, ...args] = input;
      if (Object.keys(commands).includes(command)) {
        const clicommand = commands[command]
        clicommand.callback(commands)
      } else {
        console.log("Unknown command")
      }

      outputSpacer()
  }
};

export function startREPL() {
  const r1 = newREPL();
  const commands = getCommands();
  r1.prompt();
  r1.on('line', (input) => {
    const cleanedInput = cleanInput(input);
    handleCommands(cleanedInput, commands);
    r1.prompt();
  })
};