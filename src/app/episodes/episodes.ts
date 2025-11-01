import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EpisodeUseCases } from './episode-use-cases';
import { EpisodeList } from "./episode-list/episode-list";

@Component({
  selector: 'app-episodes',
  imports: [EpisodeList],
  template: `
  <main class="container py-10 px-4 lg:px-10 mx-auto">
    @if (episodes() != null) {
      <app-episode-list [episodes]="episodes()?.results" />
    } @else {
      <!-- Loading State -->
      <div class="flex min-h-[500px] flex-col items-center justify-center">
        <div class="text-center">
          <!-- Animated Icon -->
          <div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse">
            <svg class="h-12 w-12 text-white animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
          </div>

          <!-- Loading Text -->
          <h3 class="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-200">
            Loading Episodes
          </h3>
          <p class="text-slate-600 dark:text-slate-400">
            Fetching all episodes from the multiverse...
          </p>

          <!-- Loading Dots Animation -->
          <div class="mt-6 flex items-center justify-center gap-2">
            <div class="h-3 w-3 rounded-full bg-purple-500 animate-bounce" style="animation-delay: 0ms"></div>
            <div class="h-3 w-3 rounded-full bg-pink-500 animate-bounce" style="animation-delay: 150ms"></div>
            <div class="h-3 w-3 rounded-full bg-purple-500 animate-bounce" style="animation-delay: 300ms"></div>
          </div>
        </div>
      </div>
    }
  </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Episodes {
  private episodeService = inject(EpisodeUseCases);
  protected episodes = this.episodeService.getAll();
}
