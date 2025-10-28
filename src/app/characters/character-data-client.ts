import { inject, Injectable } from '@angular/core';
import { CharacterRepository } from './character-repository';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CharacterDTO } from './character-dto';
import { PaginationDTO } from '@shared/models/pagination';
import { CharacterEntity } from './character-entity';
import { CharacterDetailEntity } from './character-detail/character-detail-entity';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataClient extends CharacterRepository {
  private http = inject(HttpClient);
  private url = 'https://rickandmortyapi.com/api/character';

  getById(id: string): Observable<CharacterDetailEntity> {
    return this.http.get<CharacterDTO>(`${this.url}/${id}`).pipe(map(response => ({
      id: response.id.toString(),
      name: response.name,
      status: response.status,
      type: response.type,
      image: response.image,
      species: response.species,
      gender: response.species,
      episode: response.episode,
      url: response.url,
      created: response.created,
      origin: {
        name: response.origin.url,
        url: response.origin.url
      },
      location: {
        name: response.location.name,
        url: response.location.url
      }
    } satisfies CharacterDetailEntity)));
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
