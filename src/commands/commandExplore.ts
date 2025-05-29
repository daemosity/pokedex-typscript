import { type State, type CLICommand } from "src/state";

type HasName = {
    name: string;
}

async function commandExplore(state:State, ...args: string[]) {
    const { pokeAPI } = state;
    const location = await pokeAPI.fetchLocation(args[0]) ?? undefined;

    if (location) {
        const { pokemon_encounters } = location;
        await printNames(pokemon_encounters.map(encounter => encounter.pokemon));
    }
}

async function printNames<T extends HasName>(results: T[]) {
    for (const item of results) {
        await console.log(item.name);
    }
}

export const commandExploreRegistration: CLICommand = {
      name: "explore",
      description: "lists all pokemon in a given area",
      callback: commandExplore
}