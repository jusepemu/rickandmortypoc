import { inject, Injectable } from '@angular/core';
import { CharactersDataClient } from './characters-data-client';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private readonly adapter = inject(CharactersDataClient);

  getAll() {
    return this.adapter.getAll();
  }
}
