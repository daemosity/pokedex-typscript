import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_reg.js";

export type State = {
  input: Interface
  commands: CLIRegistry
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};

export type CLIRegistry = Record<string, CLICommand>;


export function initState(): State {
  const r1 = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Pokedex >> `,
  })
  const commands = getCommands();

  const state: State = {
    input: r1,
    commands: commands
  };

  return state;
};