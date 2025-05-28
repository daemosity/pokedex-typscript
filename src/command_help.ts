import { CLIRegistry, CLICommand } from "./command.js";

function commandHelp(commands: CLIRegistry) {
    console.log("Welcome to the Pokedex!")
    console.log("Usage:\n");
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