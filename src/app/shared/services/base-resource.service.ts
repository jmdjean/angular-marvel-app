import { Injector } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { BaseResourceApiData } from '../model/baseResourceApiDataModel';
import { map, catchError } from "rxjs/operators";
import { Thumbnail } from '../model/thumbnail.model';

export abstract class BaseResourceService {

  protected http: HttpClient;
  private url = '';
  private suffixUrl = `ts=${environment.ts}&apikey=${environment.apikey}&hash=${environment.hash}`;

  constructor(
    protected apiPath: string,
    protected injector: Injector
  ) {
    this.http = injector.get(HttpClient);
    this.url = `${environment.url}${this.apiPath}?${this.suffixUrl}`;
  }

  getAll(pageSize: number, offset: number): Observable<any> {
    const pagination = `&limit=${pageSize}&offset=${offset}`;
    const url = `${this.url}${pagination}`;

    return this.http.get(url)
      .pipe(
        map(res => this.dataToResourceModelData(res)),
        catchError((error) => this.handleError(error))
      );
  }

  getById(id: number): Observable<any> {
    const url = `${environment.url}${this.apiPath}/${id}?${this.suffixUrl}`;
    return this.http.get(url)
      .pipe(
        map(res => this.dataToResourceModelResults(res)),
        catchError((error) => this.handleError(error))
      );
  }

  dataToResourceModelData(res: any): BaseResourceApiData {
    res.data.results = this.buildImageUrlToAllResults(res.data.results);
    return { ...res.data };
  }

  dataToResourceModelResults(res: any): any[] {
    res.data.results = this.buildImageUrlToAllResults(res.data.results);
    return { ...res.data.results[0] };
  }

  buildImageUrlToAllResults(results: any[]): any[] {
    results.forEach((item: any) => {
      item.imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`
    });

    return results;
  }

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    alert('Ocorreu um erro ao carregar os dados, tente mais tarde.');
    return throwError(error);
  }
}
