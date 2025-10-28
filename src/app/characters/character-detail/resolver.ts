import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { CharacterUseCases } from '../character-use-cases';
import { CharacterEntity } from '../character-entity';

export const characterDetailResolver = (route: ActivatedRouteSnapshot) => {
  const characterUseCases = inject(CharacterUseCases);
  const characterId = route.paramMap.get("characterId");
  
  return characterUseCases.getById(characterId!);
}
