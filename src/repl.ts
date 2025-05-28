import { initState, type State } from "./state.js";

export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter(x => x !== "");
  return splitInput
}

function outputSpacer(boundary: string = "") {
  console.log(boundary);
};

function handleCommands(cleanedInput: string[], state: State) {

    if (cleanedInput.length > 0) {
      outputSpacer()

      const {commands: cliCommands} = state;
      const [command, ...args] = cleanedInput;
      if (Object.keys(cliCommands).includes(command)) {
        cliCommands[command].callback(state);
      } else {
        console.log("Unknown command")
      }

      outputSpacer()
  }
};

export function startREPL() {
  const state = initState();
  const {input: inputReader} = state
  inputReader.prompt();
  inputReader.on('line', (userInput) => {
    const cleanedInput = cleanInput(userInput);
    handleCommands(cleanedInput, state);
    inputReader.prompt();
  })
};