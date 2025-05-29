import { Cache } from "./pokecache.js";
import type { PokemonRoot } from "./types/pokemon_type.js";
import type { ShallowLocations, Location } from "./types/location_types.js";

const seconds = 1000;

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2/location-area/";
  private static readonly pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
  #pokecache = new Cache(10 * seconds);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations | void> {
    const url = pageURL ? pageURL : PokeAPI.baseURL;

    // Check to see if cache has url information
    const cacheEntry = this.#pokecache.get(url);
    if (cacheEntry) {
      return cacheEntry as ShallowLocations;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        this.#pokecache.add(url, json);

        return json as ShallowLocations;

    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
  }

  async fetchLocation(locationName: string): Promise<Location | void> {
    if (locationName) {
      // Check to see if cache has location information
      const cacheEntry = this.#pokecache.get(locationName);
      if (cacheEntry) {
        return cacheEntry as Location;
      }

      try {
          const response = await fetch(`${PokeAPI.baseURL}${locationName}`);;
          if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
          }

          const json = await response.json();
          this.#pokecache.add(locationName, json);
          return json as Location;

      } catch (err) {
          if (err instanceof Error) {
              console.error(err.message);
          }
      }
    }
  }

    async fetchPokemon(pokemonName: string): Promise<PokemonRoot | void> {
    if (pokemonName) {
      // Check to see if cache has location information
      const cacheEntry = this.#pokecache.get(pokemonName);
      if (cacheEntry) {
        return cacheEntry as PokemonRoot;
      }

      try {
          const response = await fetch(`${PokeAPI.pokemonURL}${pokemonName}`);;
          if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
          }

          const json = await response.json();
          this.#pokecache.add(pokemonName, json);
          return json as PokemonRoot;

      } catch (err) {
          if (err instanceof Error) {
              console.error(err.message);
          }
      }
    }
  }
}