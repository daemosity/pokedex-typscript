import { commandExitRegistration } from "./command_exit.js";
import { commandHelpRegistration } from "./command_help.js";
import { CLIRegistry } from "./state.js";

export function getCommands(): CLIRegistry {
  return {
    help: commandHelpRegistration,
    exit: commandExitRegistration
  };
}