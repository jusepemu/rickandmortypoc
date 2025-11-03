import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersService } from './services/characters-service';
import { CharacterCard } from './components/character-card/character-card';
import { FavoritesStore } from '../../favorites/favorites-store';
import { CharacterEntity } from '../character-entity';

@Component({
  selector: 'app-character-list',
  imports: [CharacterCard],
  templateUrl: './character-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterList {
  private favoritesStoreService = inject(FavoritesStore);
  private charactersService = inject(CharactersService);
  characters = this.charactersService.getAll();

  existsInFavorites(characterId: string) {
    return this.favoritesStoreService.includeCharacterInFavorites(characterId);
  }

  addToFavorites(character: CharacterEntity) {
    this.favoritesStoreService.addCharacterToFavorite(character);
  }

  removeToFavorites(character: CharacterEntity) {
    this.favoritesStoreService.removeCharacterFromFavorites(character.id);
  }
}
