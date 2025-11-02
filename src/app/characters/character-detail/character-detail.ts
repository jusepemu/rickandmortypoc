import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';

import { CharacterDetailEntity } from './character-detail-entity';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { ZardButtonComponent } from '@shared/components/button/button.component';
import { FavoritesStore } from 'src/app/favorites/favorites-store';

@Component({
  selector: 'app-character-detail',
  imports: [NgOptimizedImage, DatePipe, ZardButtonComponent],
  template: `
    <section class="container mx-auto px-4 py-10">
      <!-- Hero Section with Image and Name -->
      <div
        class="mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl dark:from-slate-800 dark:to-slate-900"
      >
        <div class="grid gap-8 lg:grid-cols-2">
          <!-- Image Section -->
          <div class="relative overflow-hidden lg:min-h-[600px]">
            <img
              [ngSrc]="character().image"
              [alt]="character().name"
              width="600"
              height="600"
              priority
              class="h-full w-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
            ></div>

            <!-- Status Badge on Image -->
            <div class="absolute top-6 left-6">
              <span
                [class]="
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold backdrop-blur-md transition-all ' +
                  getStatusClasses()
                "
              >
                <span class="h-3 w-3 rounded-full" [class]="getStatusDotClasses()"></span>
                {{ character().status }}
              </span>
            </div>
          </div>

          <!-- Info Section -->
          <div class="flex flex-col justify-between p-8 lg:p-12">
            <!-- Header -->
            <div>
              <h1 class="mb-4 text-4xl font-black text-slate-900 dark:text-slate-100 lg:text-5xl">
                {{ character().name }}
              </h1>

              @if (character().type) {
                <p class="mb-6 text-lg italic text-slate-600 dark:text-slate-400">
                  {{ character().type }}
                </p>
              }

              <!-- Info Grid -->
              <div class="grid gap-4 sm:grid-cols-2">
                <!-- Species -->
                <div class="rounded-xl bg-white p-4 shadow-md dark:bg-slate-950">
                  <div
                    class="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Species
                  </div>
                  <p class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {{ character().species }}
                  </p>
                </div>

                <!-- Gender -->
                <div class="rounded-xl bg-white p-4 shadow-md dark:bg-slate-950">
                  <div
                    class="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Gender
                  </div>
                  <p class="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {{ character().gender }}
                  </p>
                </div>

                <!-- Origin -->
                <div class="rounded-xl bg-white p-4 shadow-md dark:bg-slate-950">
                  <div
                    class="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Origin
                  </div>
                  <p class="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                    {{ character().origin.name }}
                  </p>
                </div>

                <!-- Location -->
                <div class="rounded-xl bg-white p-4 shadow-md dark:bg-slate-950">
                  <div
                    class="mb-1 flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400"
                  >
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Location
                  </div>
                  <p class="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">
                    {{ character().location.name }}
                  </p>
                </div>
              </div>

              <!-- Episodes Badge -->
              <div
                class="mt-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 border border-purple-500/20"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="rounded-full bg-purple-500/20 p-2">
                      <svg
                        class="h-6 w-6 text-purple-600 dark:text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">
                        Featured in
                      </p>
                      <p class="text-2xl font-black text-purple-600 dark:text-purple-400">
                        {{ character().episode.length }} Episodes
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Created Date -->
              <div class="mt-4 text-sm text-slate-500 dark:text-slate-400">
                <span class="font-semibold">Created:</span>
                {{ character().created | date: 'MMM d, y' }}
              </div>
            </div>

            <!-- Favorite Button -->
            <button
              (click)="toggleFavorite()"
              z-button
              class="mt-8 flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            >
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-lg">{{ favoriteButtonLabel() }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetail {
  characterId = input.required<string>();
  character = input.required<CharacterDetailEntity>();
  favoritesStoreService = inject(FavoritesStore);
  private favoriteCharacters = this.favoritesStoreService.getAllFavoritesCharacters();

  protected favoriteButtonLabel = computed(() =>
    this.favoriteCharacters().some((c) => c.id === this.characterId())
      ? 'Remove from favorites'
      : 'Add to favorites',
  );

  protected getStatusClasses = computed(() => {
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

  protected getStatusDotClasses = computed(() => {
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

  toggleFavorite() {
    const isFavorite = this.favoriteCharacters().some((c) => c.id === this.characterId());

    if (isFavorite) {
      this.favoritesStoreService.removeCharacterFromFavorites(this.characterId());
      return;
    }

    this.favoritesStoreService.addCharacterToFavorite(this.character());
  }
}
