import type { State, CLICommand } from "src/state";

async function commandCatch(state:State, ...args: string[]) {
    const {pokedex, pokeAPI} = state;
    const pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`)
    const pokemonInfo = await pokeAPI.fetchPokemon(pokemonName)
    if (pokemonInfo) {
        if (isPokemonCaught(pokemonInfo.base_experience)) {
            console.log(`${pokemonName} was caught!`)
            pokedex.set(pokemonName, pokemonInfo)
            console.log("You may now inspect it with the inspect command.")
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
      name: "catch",
      description: "attempts to catch a given pokemon",
      callback: commandCatch
}