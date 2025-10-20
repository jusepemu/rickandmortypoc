import { inject, Injectable, Signal } from "@angular/core";
import { PaginationDTO } from "@shared/models/pagination";
import { EpisodeEntity } from "./episode-entity";
import { EpisodeApiDataSource } from "./episode-api-data-source";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EpisodeRepository {
    private dataSource = inject(EpisodeApiDataSource);

    getAll(): Signal<PaginationDTO<EpisodeEntity> | undefined> {
        const response = toSignal(this.dataSource.getAll().pipe(map(dtoPagination => ({
            info: dtoPagination.info,
            results: dtoPagination.results.map(dto => ({
                id: dto.id.toString(),
                season: dto.episode.split('E')[0],
                numberEpisode: dto.episode.split('E')[1],
                name: dto.name,
                airDate: new Date(dto.air_date)
            })) 
        }))));

        return response;
    }   
}