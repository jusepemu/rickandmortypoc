import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FavoritesStore } from './favorites-store';
import { FavoritesEmpty } from './components/FavoritesEmpty';

@Component({
  selector: 'app-favorites',
  imports: [FavoritesEmpty],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Favorites {
  private favoritesStateService = inject(FavoritesStore);
  protected characters = this.favoritesStateService.getAllFavoritesCharacters();

  protected getStatusClasses(status: string): string {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case 'alive':
        return 'bg-green-500/20 text-green-100 border border-green-400/30';
      case 'dead':
        return 'bg-red-500/20 text-red-100 border border-red-400/30';
      default:
        return 'bg-slate-500/20 text-slate-100 border border-slate-400/30';
    }
  }

  protected getStatusDotClasses(status: string): string {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case 'alive':
        return 'bg-green-400 animate-pulse';
      case 'dead':
        return 'bg-red-400';
      default:
        return 'bg-slate-400';
    }
  }
}
