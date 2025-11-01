import { afterNextRender, computed, Injectable, signal, WritableSignal } from '@angular/core';
import { CharacterDetailEntity } from '../characters/character-detail/character-detail-entity';
import { CharacterEntity } from '../characters/character-entity';

type Favorites = {
  characters: CharacterEntity[];
};

const FAVORITE_STORAGE_KEY = 'favorites';

@Injectable({
  providedIn: 'root',
})
export class FavoritesStore {
  private favoritesState: WritableSignal<Favorites> = signal({
    characters: [],
  });

  constructor() {
    afterNextRender(() => {
      const stored = localStorage.getItem(FAVORITE_STORAGE_KEY);

      if (!stored) return;

      const parsed = JSON.parse(stored);
      this.favoritesState.set(parsed);
    });
  }

  getAllFavoritesCharacters() {
    return computed(() => this.favoritesState().characters);
  }

  addCharacterToFavorite(character: CharacterEntity) {
    this.favoritesState.update((favorites) => ({
      ...favorites,
      characters: [...favorites.characters, character],
    }));

    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(this.favoritesState()));
  }

  clearFavorites() {
    this.favoritesState.set({ characters: [] });

    localStorage.clear();
  }
}
