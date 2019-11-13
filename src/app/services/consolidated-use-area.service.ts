import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsolidatedUseAreaService {


  urlRegion = environment.terramaUrl + '/api/consolidatedUseArea';

  constructor(
    private http: HttpClient
  ) {}

  getAll() {
    return this.http.get(this.urlRegion + '/getAll').toPromise();
  }
}