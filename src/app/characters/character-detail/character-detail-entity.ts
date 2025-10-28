import { CharacterEntity } from "../character-entity";

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface CharacterDetailEntity extends CharacterEntity {
  species: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}
