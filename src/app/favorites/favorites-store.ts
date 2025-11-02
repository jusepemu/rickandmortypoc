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
  private charactersId: WritableSignal<Set<CharacterDetailEntity['id']>> = signal(new Set());

  constructor() {
    afterNextRender(() => {
      const stored = localStorage.getItem(FAVORITE_STORAGE_KEY);

      if (!stored) return;

      const parsed = JSON.parse(stored);
      this.favoritesState.set(parsed);
      this.charactersId.set(new Set(parsed.characters.map((char: CharacterEntity) => char.id)));
    });
  }

  getAllFavoritesCharacters() {
    return computed(() => this.favoritesState().characters);
  }

  includeCharacterInFavorites(characterId: CharacterDetailEntity['id']) {
    return this.charactersId().has(characterId);
  }

  addCharacterToFavorite(character: CharacterEntity) {
    this.favoritesState.update((favorites) => ({
      ...favorites,
      characters: [...favorites.characters, character],
    }));

    this.charactersId().add(character.id);
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(this.favoritesState()));
  }

  removeCharacterFromFavorites(characterId: CharacterDetailEntity['id']) {
    this.favoritesState.update((favorites) => ({
      ...favorites,
      characters: favorites.characters.filter((char) => char.id !== characterId),
    }));

    this.charactersId().delete(characterId);
    localStorage.setItem(FAVORITE_STORAGE_KEY, JSON.stringify(this.favoritesState()));
  }

  clearFavorites() {
    this.favoritesState.set({ characters: [] });

    localStorage.clear();
  }
}
