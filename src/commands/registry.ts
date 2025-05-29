import { commandExitRegistration } from "./command_exit.js";
import { commandHelpRegistration } from "./command_help.js";
import { commandMapRegistration, commandMapbRegistration } from "./commandMap.js";
import { commandExploreRegistration } from "./commandExplore.js";
import { commandCatchRegistration } from "./commandCatch.js";
import type { CLIRegistry } from "../state.js";

export function getCommands(): CLIRegistry {
  return {
    help: commandHelpRegistration,
    exit: commandExitRegistration,
    map: commandMapRegistration,
    mapb: commandMapbRegistration,
    explore: commandExploreRegistration,
    catch: commandCatchRegistration
  };
}