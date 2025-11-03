import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EpisodeEntity } from '../../episode-entity';
import { PaginationDTO } from '@shared/models/pagination';
import { map } from 'rxjs';
import { EpisodeDTO } from '../../episode-dto';
import { EpisodesMapper } from './episodes-mapper';

@Injectable({
  providedIn: 'root',
})
export class EpisodesDataClient {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/episode';

  getAll(): Signal<PaginationDTO<EpisodeEntity> | undefined> {
    return toSignal(
      this.http
        .get<PaginationDTO<EpisodeDTO>>(this.url)
        .pipe(map((dtoPagination) => EpisodesMapper.PaginationDtotoEntity(dtoPagination))),
    );
  }
}
