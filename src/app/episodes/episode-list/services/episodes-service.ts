import { inject, Injectable } from '@angular/core';
import { EpisodesDataClient } from './episodes-data-client';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  private readonly adapter = inject(EpisodesDataClient);

  getAll() {
    return this.adapter.getAll();
  }
}
