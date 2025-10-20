import { inject, Injectable } from '@angular/core';
import { CHARACTER_REPOSITORY } from './character-di';

/**
 * Inplementation of use cases related to characters usign the repository like a token injection.
 * 
 * @see ./character-di.ts
 */

@Injectable({
  providedIn: 'root'
})
export class CharacterUseCases {
  private repository = inject(CHARACTER_REPOSITORY);

  getAll() {
    return this.repository.getAll();
  }

  getById(id: string) {
    return this.repository.getById(id);
  }
}
