import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterDetailEntity } from '../character-detail-entity';
import { map, Observable } from 'rxjs';
import { CharacterDTO } from '../../character-dto';
import { CharacterMapper } from './character-mapper';

@Injectable({
  providedIn: 'root',
})
export class CharacterDataClient {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character';

  getById(id: string): Observable<CharacterDetailEntity> {
    return this.http
      .get<CharacterDTO>(`${this.url}/${id}`)
      .pipe(map((dto) => CharacterMapper.DtotoEntity(dto)));
  }
}
