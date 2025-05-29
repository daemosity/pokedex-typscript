import type { State, CLICommand } from "src/state";

async function commandPokedex(state:State, ...args: string[]) {
    const {pokedex} = state;
    const caughtPokemonList = [];
    if (pokedex.size < 1) {
        console.log("You haven't caught any Pokemon yet");
        return
    }
    for (const pokemonName of pokedex.keys()) {
        caughtPokemonList.push(`  - ${pokemonName}`);
    }
    const report = `Your Pokedex:
${caughtPokemonList.join("\n")}`;
    console.log(report);
}

export const commandPokedexRegistration: CLICommand = {
      name: "pokedex",
      description: "Lists all your caught pokemon",
      callback: commandPokedex
}