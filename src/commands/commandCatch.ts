import type { State, CLICommand } from "src/state";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/" as const;

async function commandCatch(state:State, ...args: string[]) {
    const {pokedex, pokeAPI} = state;
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`)
    const pokemonInfo = await pokeAPI.fetchPokemon(pokemonName)
    if (pokemonInfo) {
        if (isPokemonCaught(pokemonInfo.base_experience)) {
            console.log(`${pokemonName} was caught!`)
        } else {
            console.log(`${pokemonName} escaped!`)
        }
    }
}

function isPokemonCaught(baseExp: number): boolean {
    const catchScore = Math.random();
    const numberToBeat = baseExp / 400;
    return catchScore > numberToBeat;
}

export const commandCatchRegistration: CLICommand = {
      name: "explore",
      description: "lists all pokemon in a given area",
      callback: commandCatch
}