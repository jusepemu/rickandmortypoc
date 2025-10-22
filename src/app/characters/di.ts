import { inject, InjectionToken } from "@angular/core";
import { CharacterRepository } from "./character-repository";
import { CharacterDataClient } from "./character-data-client";

export const CHARACTER_REPOSITORY = new InjectionToken<CharacterRepository>(
  'CharacterRepository',
  { providedIn: 'root', factory: () => inject(CharacterDataClient) }
);
