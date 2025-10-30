import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FavoritesStore } from './favorites-store';

@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Favorites {
  private favoritesStateService = inject(FavoritesStore)
  protected characters = this.favoritesStateService.getAllFavoritesCharacters()
}
