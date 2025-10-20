import { inject, Injectable } from '@angular/core';
import { CharacterRepository } from './character-repository';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CharacterDTO } from './character-dto';
import { PaginationDTO } from '@shared/models/pagination';
import { CharacterEntity } from './character-entity';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataClient extends CharacterRepository {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character';

  getById(id: string): Observable<CharacterEntity> {
    throw new Error('Method not implemented.');
  }

  getAll(): Observable<PaginationDTO<CharacterEntity>> {
    return this.http.get<PaginationDTO<CharacterDTO>>(this.url).pipe(map(response => {
      return {
        info: response.info,
        results: response.results.map(dto => ({
          id: dto.id.toString(),
          name: dto.name,
          status: dto.status,
          type: dto.type,
          image: dto.image
        }))
      };
    }));
  }
}
