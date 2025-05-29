import { type CLICommand, type State } from "../state.js";

async function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.input.close();
    process.exit(0);
};

export const commandExitRegistration: CLICommand = {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit
}