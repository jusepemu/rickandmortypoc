import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EpisodeEntity } from '../../episode-entity';
import { PaginationDTO } from '@shared/models/pagination';
import { map, Observable } from 'rxjs';
import { EpisodeDTO } from '../../episode-dto';
import { EpisodesMapper } from './episodes-mapper';

@Injectable({
  providedIn: 'root',
})
export class EpisodesDataClient {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/episode';

  getAll(page: number): Observable<PaginationDTO<EpisodeEntity> | undefined> {
    return this.http
      .get<PaginationDTO<EpisodeDTO>>(`${this.url}/?page=${page}`)
      .pipe(map((dtoPagination) => EpisodesMapper.PaginationDtotoEntity(dtoPagination)));
  }
}
