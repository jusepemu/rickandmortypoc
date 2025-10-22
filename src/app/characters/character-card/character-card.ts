import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CharacterEntity } from '../character-entity';

@Component({
  selector: 'app-character-card',
  imports: [],
  template: `
  <article class="">
    <span>{{ character().name }}</span>
    <img src="{{ character().image }}" alt="{{ character().name }}" class="w-full h-auto rounded-md" />
    <p>{{ character().type }}</p>
    <div class="mt-2 flex justify-between items-center">
      <p>{{ character().status }}</p>
      <button (click)="clickAddToFavorites()">Add to ⭐</button>
    </div>
  </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCard {
  character = input.required<CharacterEntity>()
  onAddToFavorites = output<void>();

  clickAddToFavorites() {
    this.onAddToFavorites.emit();
  }
}
