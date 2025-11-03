import { CharacterDTO } from '../../character-dto';
import { CharacterDetailEntity } from '../character-detail-entity';

export class CharacterMapper {
  static DtotoEntity(dto: CharacterDTO): CharacterDetailEntity {
    return {
      id: dto.id.toString(),
      name: dto.name,
      status: dto.status,
      type: dto.type,
      image: dto.image,
      species: dto.species,
      gender: dto.gender,
      origin: {
        name: dto.origin.name,
        url: dto.origin.url,
      },
      location: {
        name: dto.location.name,
        url: dto.location.url,
      },
      episode: dto.episode,
      url: dto.url,
      created: dto.created,
    };
  }
}
