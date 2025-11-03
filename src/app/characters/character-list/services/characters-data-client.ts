import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CharacterEntity } from '../../character-entity';
import { PaginationDTO } from '@shared/models/pagination';
import { map } from 'rxjs';
import { CharacterDTO } from '../../character-dto';
import { CharactersMapper } from './characters-mapper';

@Injectable({
  providedIn: 'root',
})
export class CharactersDataClient {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character';

  getAll(): Signal<PaginationDTO<CharacterEntity> | undefined> {
    return toSignal(
      this.http
        .get<PaginationDTO<CharacterDTO>>(this.url)
        .pipe(map((dtoPagination) => CharactersMapper.PaginationDtotoEntity(dtoPagination))),
    );
  }
}
