import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-team-section-card',
  imports: [NgOptimizedImage],
  host: {
    '[class]': 'backgroundGradientPosition()'
  },
  template: `
  <div>
    <article class="flex gap-6 max-w-3xl mx-auto">
      @if (position() === 'rtl') {
        <!-- Avatar -->
        <figure class=" w-full max-w-[200px] h-[200px] rounded-md overflow-hidden">
          <img class="object-cover w-full h-full" 
            [ngSrc]="image()"
            width="200" 
            height="200" 
            [alt]="member()">
        </figure>
        <!-- information -->
        <div>
          <h5 class="text-3xl font-semibold text-white mb-6">{{ member() }}</h5>
          <p class="text-white text-xl">{{ information() }}</p>
        </div>
      } @else {
        <!-- information -->
        <div>
          <h5 class="text-3xl font-semibold text-white mb-6">{{ member() }}</h5>
          <p class="text-white text-xl">{{ information() }}</p>
        </div>
        <!-- Avatar -->
        <figure class=" w-full max-w-[200px] h-[200px] rounded-md overflow-hidden">
          <img class="object-cover w-full h-full"
            [ngSrc]="image()"
            width="200"
            height="200"
            [alt]="member()">
        </figure>
      }
    </article>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamSectionCard {
  readonly member = input.required<string>()
  readonly image = input('https://rickandmortyapi.com/api/character/avatar/1.jpeg')
  readonly information = input<string>()
  readonly position = input<'rtl' | 'ltr'>('ltr')

  protected readonly backgroundGradientPosition = computed(() => `py-20 w-full ${this.position() === 'rtl' ? 'bg-radial-r-green': 'bg-radial-l-green'}`)
}
