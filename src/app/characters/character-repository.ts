import { PaginationDTO } from '@shared/models/pagination';
import { Observable } from 'rxjs';
import { CharacterDTO } from './character-dto';
import { CharacterEntity } from './character-entity';

export abstract class CharacterRepository {
  abstract getAll(): Observable<PaginationDTO<CharacterEntity>>;
  abstract getById(id: string): Observable<CharacterEntity>;  
}