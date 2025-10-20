import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EpisodeUseCases } from './episode-use-cases';

@Component({
  selector: 'app-episodes',
  imports: [],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Episodes {
  private episodeService = inject(EpisodeUseCases);
  protected episodes = this.episodeService.getAll();
}
