import { State, CLICommand } from "./state.js";

function commandHelp(state: State) {
    console.log("Welcome to the Pokedex!")
    console.log("Usage:\n");
    const { commands } = state;
    for (const cmd of Object.keys(commands)) {
        const registeredCMD = commands[cmd];
        const {name, description} = registeredCMD;
        console.log(`${name}: ${description}`);
    }
};

export const commandHelpRegistration: CLICommand = {
      name: "help",
      description: "Displays the help message",
      callback: commandHelp
}