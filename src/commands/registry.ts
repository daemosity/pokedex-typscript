import type { CLIRegistry } from "../state.js";
import { commandExitRegistration } from "./command_exit.js";
import { commandHelpRegistration } from "./command_help.js";
import { commandMapRegistration, commandMapbRegistration } from "./commandMap.js";
import { commandExploreRegistration } from "./commandExplore.js";
import { commandCatchRegistration } from "./commandCatch.js";
import { commandInspectRegistration } from "./commandInspect.js";
import { commandPokedexRegistration } from "./commandPokedex.js";

export function getCommands(): CLIRegistry {
  return {
    help: commandHelpRegistration,
    exit: commandExitRegistration,
    map: commandMapRegistration,
    mapb: commandMapbRegistration,
    explore: commandExploreRegistration,
    catch: commandCatchRegistration,
    inspect: commandInspectRegistration,
    pokedex: commandPokedexRegistration
  };
}