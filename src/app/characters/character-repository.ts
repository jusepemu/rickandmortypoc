import { PaginationDTO } from '@shared/models/pagination';
import { Observable } from 'rxjs';
import { CharacterEntity } from './character-entity';
import { CharacterDetailEntity } from './character-detail/character-detail-entity';

export abstract class CharacterRepository {
  abstract getAll(): Observable<PaginationDTO<CharacterEntity>>;
  abstract getById(id: string): Observable<CharacterDetailEntity>;
}
