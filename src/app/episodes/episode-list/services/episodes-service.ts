import { inject, Injectable } from '@angular/core';
import { EpisodesDataClient } from './episodes-data-client';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly adapter = inject(EpisodesDataClient);

  getAll(page = 1) {
    if (page < 1) throw new Error('Page cannot be less than 1');
    return this.adapter.getAll(page);
  }
}
