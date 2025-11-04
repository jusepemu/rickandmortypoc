import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-empty',
  imports: [RouterLink],
  template: `
    <!-- Empty State -->
    <div
      class="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12 dark:border-slate-700 dark:bg-slate-900/50"
    >
      <div class="text-center">
        <!-- Icon -->
        <div
          class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800"
        >
          <svg
            class="h-12 w-12 text-slate-400 dark:text-slate-600"
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
        </div>

        <!-- Text -->
        <h3 class="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-200">No Favorites Yet</h3>
        <p class="mb-6 text-slate-600 dark:text-slate-400">
          Start exploring characters and add them to your favorites!
        </p>

        <!-- CTA Button -->
        <a
          routerLink="/characters"
          class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-800 to-slate-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg dark:from-slate-700 dark:to-slate-500"
        >
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Browse Characters
        </a>
      </div>
    </div>
  `,
})
export class FavoritesEmpty {}
