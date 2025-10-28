import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterUseCases } from './character-use-cases';
import { toSignal } from '@angular/core/rxjs-interop';
import { CharacterCard } from "./character-card/character-card";

@Component({
  selector: 'app-characters',
  imports: [CharacterCard],
  templateUrl: './characters.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Characters {
  private characterUseCases = inject(CharacterUseCases);
  characters = toSignal(this.characterUseCases.getAll(), { initialValue: null });

  addToFavorites(characterId: string) {
    console.log(`Adding character with ID ${characterId} to favorites.`);
  }
}

