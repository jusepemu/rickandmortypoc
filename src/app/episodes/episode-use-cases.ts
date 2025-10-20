import { inject, Injectable } from "@angular/core";
import { EpisodeRepository } from "./episode-repository";

@Injectable({
    providedIn: 'root'
})
export class EpisodeUseCases {
    private readonly repository = inject(EpisodeRepository);

    getAll() {
        return this.repository.getAll();
    }
}