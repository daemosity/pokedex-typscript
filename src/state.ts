import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands/registry.js";
import { PokeAPI } from "./pokeapi.js";
import { PokemonRoot } from "./types/pokemon_type.js";

type Pokedex = Map<string, PokemonRoot>;

export type State = {
  input: Interface;
  commands: CLIRegistry;
  pokeAPI: PokeAPI;
  pokedex: Pokedex;
  nextLocationsURL?: string;
  prevLocationsURL?: string;
}

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export type CLIRegistry = Record<string, CLICommand>;


export function initState(): State {
  const r1 = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `Pokedex >> `,
  })
  const commands = getCommands();
  
  const pokeAPI = new PokeAPI();

  const pokedex = new Map<string, PokemonRoot>();

  const state: State = {
    input: r1,
    commands: commands,
    pokeAPI: pokeAPI,
    pokedex: pokedex
  };

  return state;
};