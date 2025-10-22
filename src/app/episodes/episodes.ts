import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EpisodeUseCases } from './episode-use-cases';
import { EpisodeList } from "./episode-list/episode-list";

@Component({
  selector: 'app-episodes',
  imports: [EpisodeList],
  template: `
  <main class="container py-10 lg:px-10 sm:px-4 mx-auto">
    @if (episodes() != null) {
    <app-episode-list [episodes]="episodes()?.results" />
    } @else {
    <article class="text-3xl">
        loading episodes...
    </article>
    }
  </main>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Episodes {
  private episodeService = inject(EpisodeUseCases);
  protected episodes = this.episodeService.getAll();
}
