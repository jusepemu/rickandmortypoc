import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharacterUseCases } from './character-use-cases';
import { CharacterRepository } from './character-repository';
import { CharacterDataClient } from './character-data-client';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Characters {
  private characterUseCases = inject(CharacterUseCases);
  characters = toSignal(this.characterUseCases.getAll(), { initialValue: null });
}
