export type PokemonRoot = {
  abilities: Ability[] 
  base_experience: number
  cries: Cries
  forms: NameAndURL[]
  game_indices: Index[]
  height: number
  held_items: HeldItem[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_abilities: PastAbility[]
  past_types: any[]
  species: NameAndURL
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

type Ability = {
  ability: NameAndURL
  is_hidden: boolean
  slot: number
}

type NameAndURL = {
    name: string;
    url: string;
}

type Cries = {
  latest: string
  legacy: string
}

type Index = {
  game_index: number
  version: NameAndURL
}

type HeldItem = {
  item: NameAndURL
  version_details: VersionDetail[]
}

type VersionDetail = {
  rarity: number
  version: NameAndURL
}

type Mfe = {
  move: NameAndURL
  version_group_details: VersionGroupDetail[]
}

type VersionGroupDetail = {
  level_learned_at: number
  move_learn_method: NameAndURL
  order?: number
  version_group: NameAndURL
}

type PastAbility = {
  abilities: Ability[]
  generation: NameAndURL
}

type Sprites = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: string
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
  other: Other
  versions: Versions
}

type Other = {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
  showdown: Showdown
}

type DreamWorld = {
  front_default: string
  front_female: any
}

type Home = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

type OfficialArtwork = {
  front_default: string
  front_shiny: string
}

type Showdown = {
  back_default: string
  back_female: string
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

type Versions = {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}

type GenerationI = {
  "red-blue": GenIAppearance
  yellow: GenIAppearance
}

type GenIAppearance = {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

type GenerationIi = {
  crystal: Crystal
  gold: GenIIAppearance
  silver: GenIIAppearance
}

type Crystal = {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

type GenIIAppearance = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

type GenerationIii = {
  emerald: Emerald
  "firered-leafgreen": GenIIIAppearance
  "ruby-sapphire": GenIIIAppearance
}

type Emerald = {
  front_default: string
  front_shiny: string
}

type GenIIIAppearance = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

type GenerationIv = {
  "diamond-pearl": Showdown
  "heartgold-soulsilver": Showdown
  platinum: Showdown
}

type GenerationV = {
  "black-white": BlackWhite
}

type BlackWhite = Showdown & { 
    animated: Showdown;
};

type GenerationVi = {
  "omegaruby-alphasapphire": GenerationViAppearance
  "x-y": GenerationViAppearance
}

type GenerationViAppearance = {
  front_default: string
  front_female: string
  front_shiny: string
  front_shiny_female: string
}

type GenerationVii = {
  icons: Icons
  "ultra-sun-ultra-moon": GenerationViAppearance
}

type Icons = {
  front_default: string
  front_female: any
}

type GenerationViii = {
  icons: Icons
}

type Stat = {
  base_stat: number
  effort: number
  stat: NameAndURL
}

type Type = {
  slot: number
  type: NameAndURL
}