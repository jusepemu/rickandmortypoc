import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CharacterDetailEntity } from './character-detail-entity';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-character-detail',
  imports: [NgOptimizedImage],
  template: `
    <section>
      <header>
        <h2 class="font-bold text-2xl">{{character().name}}</h2>
      </header>
      <article>
        <div>
          <img [ngSrc]="character().image" [alt]="character().name" width="300" height="600" priority/>
        </div>
        <aside>
            <p>{{ character().status }}</p>
            <p>{{ character().gender }}</p>
            <p>{{ character().type }}</p>
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
