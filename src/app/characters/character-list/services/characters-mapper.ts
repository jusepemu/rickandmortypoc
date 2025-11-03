import { PaginationDTO } from '@shared/models/pagination';
import { CharacterDTO } from '../../character-dto';
import { CharacterEntity } from '../../character-entity';

export class CharactersMapper {
  static DtotoEntity(dto: CharacterDTO): CharacterEntity {
    return {
      id: dto.id.toString(),
      name: dto.name,
      status: dto.status,
      type: dto.type,
      image: dto.image,
    };
  }

  static PaginationDtotoEntity(
    dtoPagination: PaginationDTO<CharacterDTO>,
  ): PaginationDTO<CharacterEntity> {
    return {
      info: dtoPagination.info,
      results: dtoPagination.results.map((dto) => CharactersMapper.DtotoEntity(dto)),
    };
  }
}
