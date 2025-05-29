type EncounterMethodRate = {
  encounter_method: NameAndUrlObj
  version_details: VersionDetail[]
}

type VersionDetail = {
  rate: number
  version: NameAndUrlObj
}

type Name = {
  language: NameAndUrlObj
  name: string
}

type PokemonEncounter = {
  pokemon: NameAndUrlObj
  version_details: VersionDetail2[]
}

type VersionDetail2 = {
  encounter_details: EncounterDetail[]
  max_chance: number
  version: NameAndUrlObj
}

type EncounterDetail = {
  chance: number
  condition_values: NameAndUrlObj[]
  max_level: number
  method: NameAndUrlObj
  min_level: number
}

export type NameAndUrlObj = {
    name: string
    url: string
};

export type ShallowLocations = {
    count: number
    next: string
    previous: string
    results: NameAndUrlObj[]
};

export type Location = {
    encounter_method_rates: EncounterMethodRate[]
    game_index: number
    id: number
    location: NameAndUrlObj
    name: string
    names: Name[]
    pokemon_encounters: PokemonEncounter[]
}