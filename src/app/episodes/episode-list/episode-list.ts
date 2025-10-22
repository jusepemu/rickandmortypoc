import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { EpisodeEntity } from '../episode-entity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-episode-list',
  imports: [DatePipe],
  template: `
    <section class="grid grid-cols-1 gap-4">
      @if(!episodes()?.length) {
        <p class="text-2xl">No episodes found.</p>
      } @else {
        @for (episode of episodes(); track episode.id) {
          <article class="border p-4 rounded-md shadow-md">
            <span class="font-medium text-lg">{{ episode.name }}</span>
            <p>Episode: {{ episode.numberEpisode }}</p>
            <p>{{ episode.season }}</p>
            <p>{{ episode.airDate | date }}</p>
           </article>
        }
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeList {
  episodes = input<EpisodeEntity[] | undefined>([]);
}
