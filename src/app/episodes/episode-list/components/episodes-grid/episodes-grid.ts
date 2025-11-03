import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EpisodeEntity } from '../../../episode-entity';

@Component({
  selector: 'app-episodes-grid',
  imports: [DatePipe],
  template: `
    <section>
      <!-- Header -->
      <div class="mb-8">
        <h1
          class="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-400"
        >
          Episodes
        </h1>
        <p class="mt-2 text-slate-600 dark:text-slate-400">
          Browse all Rick and Morty episodes across all seasons
        </p>
        @if (episodes()?.length) {
          <div
            class="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800"
          >
            <svg
              class="h-5 w-5 text-purple-600 dark:text-purple-400"
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
            <span class="font-semibold text-slate-700 dark:text-slate-300">
              {{ episodes()!.length }} {{ episodes()!.length === 1 ? 'Episode' : 'Episodes' }}
            </span>
          </div>
        }
      </div>

      @if (!episodes()?.length) {
        <!-- Empty State -->
        <div
          class="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50/50 p-12 dark:border-slate-700 dark:bg-slate-900/50"
        >
          <div class="text-center">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="mb-2 text-2xl font-bold text-slate-800 dark:text-slate-200">
              No Episodes Found
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              We couldn't find any episodes at the moment.
            </p>
          </div>
        </div>
      } @else {
        <!-- Episodes Grid -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (episode of episodes(); track episode.id) {
            <article
              class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] dark:from-slate-800 dark:to-slate-900"
            >
              <!-- Decorative Header -->
              <div class="relative h-32 bg-gradient-to-br from-purple-500 to-pink-500 p-6">
                <!-- Season Badge -->
                <div class="absolute top-4 right-4">
                  <div
                    class="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white border border-white/30"
                  >
                    {{ episode.season }}
                  </div>
                </div>

                <!-- Episode Number -->
                <div class="flex h-full items-end">
                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30"
                    >
                      <svg
                        class="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span class="text-sm font-bold text-white">{{ episode.numberEpisode }}</span>
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-6">
                <h3
                  class="mb-3 text-lg font-bold text-slate-800 dark:text-slate-100 line-clamp-2 min-h-[3.5rem]"
                >
                  {{ episode.name }}
                </h3>

                <!-- Air Date -->
                <div class="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Aired: {{ episode.airDate | date: 'MMM d, y' }}</span>
                </div>
              </div>

              <!-- Hover Effect Border -->
              <div
                class="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-purple-500/20"
              ></div>
            </article>
          }
        </div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodesGrid {
  episodes = input<EpisodeEntity[] | undefined>([]);
}
