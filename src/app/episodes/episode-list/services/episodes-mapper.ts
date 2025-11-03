import { PaginationDTO } from '@shared/models/pagination';
import { EpisodeDTO } from '../../episode-dto';
import { EpisodeEntity } from '../../episode-entity';

export class EpisodesMapper {
  static DtotoEntity(dto: EpisodeDTO): EpisodeEntity {
    return {
      id: dto.id.toString(),
      season: dto.episode.split('E')[0],
      numberEpisode: dto.episode.split('E')[1],
      name: dto.name,
      airDate: new Date(dto.air_date),
    };
  }

  static PaginationDtotoEntity(
    dtoPagination: PaginationDTO<EpisodeDTO>,
  ): PaginationDTO<EpisodeEntity> {
    return {
      info: dtoPagination.info,
      results: dtoPagination.results.map((dto) => EpisodesMapper.DtotoEntity(dto)),
    };
  }
}
