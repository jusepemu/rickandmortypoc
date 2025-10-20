import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PaginationDTO } from "@shared/models/pagination";
import { EpisodeDTO } from "./episode-dto";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EpisodeApiDataSource {
    private readonly API_URL = 'https://rickandmortyapi.com/api/episode';
    private http = inject(HttpClient);

    getAll() {
       return  this.http.get<PaginationDTO<EpisodeDTO>>(this.API_URL);
    }
}