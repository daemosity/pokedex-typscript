import { CLICommand, State } from "./state.js";

function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.input.close();
    process.exit(0);
};

export const commandExitRegistration: CLICommand = {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit
}