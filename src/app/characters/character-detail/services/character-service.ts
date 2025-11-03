import { inject, Injectable } from '@angular/core';
import { CharacterDataClient } from './character-data-client';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly adapter = inject(CharacterDataClient);

  getById(id: string) {
    return this.adapter.getById(id);
  }
}
