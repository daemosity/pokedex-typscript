import { initState, type State } from "./state.js";

export function cleanInput(input: string): string[] {
  const splitInput = input.split(" ").filter(x => x !== "");
  return splitInput
}

function outputSpacer(boundary: string = "") {
  console.log(boundary);
};

async function handleCommands(cleanedInput: string[], state: State) {

    if (cleanedInput.length > 0) {
      outputSpacer()

      const {commands: cliCommands} = state;
      const [command, ...args] = cleanedInput;
      if (Object.keys(cliCommands).includes(command)) {
        try {
          await cliCommands[command].callback(state, ...args);
        } catch (err: unknown) {
          if (err instanceof Error) {
            console.error(err);
          }
        }
      } else {
        console.log("Unknown command")
      }
      outputSpacer();
  }
};

export function startREPL() {
  const state = initState();
  const {input: inputReader} = state
  inputReader.prompt();
  inputReader.on('line', (userInput) => {
    const cleanedInput = cleanInput(userInput);
    handleCommands(cleanedInput, state).then(() => inputReader.prompt());
  })
};