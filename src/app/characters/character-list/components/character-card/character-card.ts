import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { CharacterEntity } from '../../../character-entity';

@Component({
  selector: 'app-character-card',
  imports: [],
  template: `
    <article
      class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:from-slate-800 dark:to-slate-90a"
    >
      <!-- Image Container -->
      <div class="relative overflow-hidden">
        <img
          [src]="character().image"
          [alt]="character().name"
          class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          height="256"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>

        <!-- Status Badge -->
        <div class="absolute top-3 left-3">
          <span
            [class]="
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold backdrop-blur-sm transition-all ' +
              statusClass()
            "
          >
            <span class="h-2 w-2 rounded-full" [class]="statusDotClass()"></span>
            {{ character().status }}
          </span>
        </div>

        <!-- Favorite Button -->
        <button
          (click)="clickToggleFavorite()"
          [class]="
            'absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all hover:scale-110 active:scale-95 ' +
            (isFavorite()
              ? 'bg-yellow-500/90 hover:bg-yellow-500'
              : 'bg-white/90 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800')
          "
          [attr.aria-label]="isFavorite() ? 'Remove from favorites' : 'Add to favorites'"
        >
          @if (isFavorite()) {
            <!-- Filled Star Icon -->
            <svg class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          } @else {
            <!-- Outline Star Icon -->
            <svg
              class="h-5 w-5 text-slate-600 transition-colors hover:text-yellow-500 dark:text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          }
        </button>
      </div>

      <!-- Content -->
      <div class="p-5">
        <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 truncate">
          {{ character().name }}
        </h3>

        @if (character().type) {
          <p class="text-sm text-slate-600 dark:text-slate-400 italic">
            {{ character().type }}
          </p>
        }
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCard {
  character = input.required<CharacterEntity>();
  onAddToFavorites = output<void>();
  onRemoveFromFavorites = output<void>();
  isFavorite = input<boolean>(false);

  protected statusClass = computed(() => {
    const status = this.character().status.toLowerCase();
    switch (status) {
      case 'alive':
        return 'bg-green-500/20 text-green-100 border border-green-400/30';
      case 'dead':
        return 'bg-red-500/20 text-red-100 border border-red-400/30';
      default:
        return 'bg-slate-500/20 text-slate-100 border border-slate-400/30';
    }
  });

  protected statusDotClass = computed(() => {
    const status = this.character().status.toLowerCase();

    switch (status) {
      case 'alive':
        return 'bg-green-400 animate-pulse';
      case 'dead':
        return 'bg-red-400';
      default:
        return 'bg-slate-400';
    }
  });

  clickToggleFavorite() {
    if (this.isFavorite()) {
      this.onRemoveFromFavorites.emit();
      return;
    }

    this.onAddToFavorites.emit();
  }
}
