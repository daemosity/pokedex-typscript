import { CLIRegistry, CLICommand } from "./command";

function commandExit(commands: CLIRegistry) {
    console.log("Closing the Pokedex... Goodbye!");
    process.exit(0);
};

export const commandExitRegistration: CLICommand = {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit
}