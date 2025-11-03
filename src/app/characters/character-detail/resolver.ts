import { inject } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { CharacterService } from './services/character-service';
import { CharacterDetailEntity } from './character-detail-entity';

export const characterDetailResolver: ResolveFn<CharacterDetailEntity> = (
  route: ActivatedRouteSnapshot
) => {
  const characterService = inject(CharacterService);
  const characterId = route.paramMap.get("characterId");

  return characterService.getById(characterId!);
};
