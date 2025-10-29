import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CharacterDetailEntity } from './character-detail-entity';
import { DatePipe, NgOptimizedImage } from "@angular/common";
import { ZardButtonComponent } from "@shared/components/button/button.component";

@Component({
  selector: 'app-character-detail',
  imports: [NgOptimizedImage, DatePipe, ZardButtonComponent],
  template: `
    <section class="container mx-auto">
      <header>
        <h2 class="font-bold text-2xl">{{character().name}}</h2>
      </header>
      <article class="flex gap-4">
        <div>
          <img [ngSrc]="character().image" [alt]="character().name" width="300" height="600" priority/>
        </div>
        <aside class="flex flex-col gap-4">
            <div>
              <p>Status: {{ character().status }}</p>
              <p>Gender: {{ character().gender }}</p>
              <p>Type: {{ character().type }}</p>
              <p>Episodes: {{ character().episode.join(',').length }}</p>
              <p>Location: {{ character().location.name }}</p>
              <p>Origin: {{ character().origin.name }}</p>
              <p>Created: {{ character().created | date }}</p>
            </div>
            <button z-button class="flex gap-4">
              <span>Add to favorite</span>
              <span>⭐</span>
            </button>
        </aside>
      </article>
    </section>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterDetail {
  characterId = input.required<string>();
  character = input.required<CharacterDetailEntity>();
}
