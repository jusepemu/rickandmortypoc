import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FavoritesStore } from './favorites-store';
import { FavoritesEmpty } from './components/FavoritesEmpty';
import { CharacterCard } from '../shared/components/cards/character-card/character-card';

@Component({
  selector: 'app-favorites',
  imports: [FavoritesEmpty, CharacterCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Favorites {
  private favoritesStateService = inject(FavoritesStore);
  protected characters = this.favoritesStateService.getAllFavoritesCharacters();

  removeFromFavorites(characterId: string) {
    this.favoritesStateService.removeCharacterFromFavorites(characterId);
  }
}
