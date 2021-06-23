import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface FilterResponseStructure{
  success: string,
  count: number,
  params: {},
  filteredData: []
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private _url = 'http://localhost:3000/api/v1/wka';
  constructor(private http: HttpClient) { }

  getInfo(dateVon: string, dateBis: string, Inbetriebn: boolean, Genehmigt: boolean): Observable<any[]>{
    return this.http.get<FilterResponseStructure>(`${this._url}?vonDateParam=${dateVon}&bisDateParam=${dateBis}&inbetriebnParam=${Inbetriebn}&genehmigtParam=${Genehmigt}`)
    .pipe(
      pluck('FilteredData')
    );
  }
}
