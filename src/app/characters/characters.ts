import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterUseCases } from './character-use-cases';
import { toSignal } from '@angular/core/rxjs-interop';
import { CharacterCard } from './character-card/character-card';
import { FavoritesStore } from '../favorites/favorites-store';
import { CharacterEntity } from './character-entity';

@Component({
  selector: 'app-characters',
  imports: [CharacterCard],
  templateUrl: './characters.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Characters {
  private favoritesStoreService = inject(FavoritesStore);
  private characterUseCases = inject(CharacterUseCases);
  characters = toSignal(this.characterUseCases.getAll(), { initialValue: null });

  addToFavorites(character: CharacterEntity) {
    this.favoritesStoreService.addCharacterToFavorite(character);
  }
}
