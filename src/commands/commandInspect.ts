import { stat } from "fs";
import type { State, CLICommand } from "src/state";
import { PokemonRoot } from "src/types/pokemon_type";

async function commandInspect(state:State, ...args: string[]) {
    const { pokedex } = state;
    const chosenPokemon = args[0];
    const pokemonInfo = pokedex.get(chosenPokemon);
    if (pokemonInfo) {
        displayPokeInfo(pokemonInfo) 
    } else {
        console.log("you have not caught that pokemon");
    }
}

function displayPokeInfo(pokemonInfo: PokemonRoot) {
    const {name, height, weight, stats, types} = pokemonInfo;

    const statList = []
    for (const stat of stats) {
        statList.push(`  -${stat.stat.name}: ${stat.base_stat}`)
    }

    const typeList = []
    for (const kind of types) {
        typeList.push(`  - ${kind.type.name}`)
    }

    const report =`Name: ${name}
Height: ${height}
Weight: ${weight}
Stats:
${statList.join("\n")}
Types:
${typeList.join("\n")}`

    console.log(report)
}

export const commandInspectRegistration: CLICommand = {
      name: "inspect",
      description: "displays captured pokemon information",
      callback: commandInspect
}