import { type State, type CLICommand } from "src/state";

type HasName = {
    name: string;
}

async function commandMap(state:State) {
    const { pokeAPI, nextLocationsURL } = state;
    const shallowLocations = await pokeAPI.fetchLocations(nextLocationsURL) ?? undefined;
    if (shallowLocations) {
        const { previous, next, results } = shallowLocations;
        state.prevLocationsURL = previous;
        state.nextLocationsURL = next;
        await printNames(results);
    }
}

async function commandMapb(state:State) {
    const { pokeAPI, prevLocationsURL, nextLocationsURL } = state;
    if (prevLocationsURL === nextLocationsURL || prevLocationsURL === null) {
        console.log("you're on the first page");
        return
    }
    
    const shallowLocations = await pokeAPI.fetchLocations(prevLocationsURL) ?? undefined;
    if (shallowLocations) {
        const { previous, next, results } = shallowLocations;
        state.prevLocationsURL = previous;
        state.nextLocationsURL = next;
        await printNames(results);
    }
}

async function printNames<T extends HasName>(results: T[]) {
    for (const item of results) {
        await console.log(item.name);
    }
}

export const commandMapRegistration: CLICommand = {
      name: "map",
      description: "Paginates forward through Pokemon Locations",
      callback: commandMap
}

export const commandMapbRegistration: CLICommand = {
      name: "mapb",
      description: "Paginates backward through Pokemon Locations",
      callback: commandMapb
}