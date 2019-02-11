/// <reference path="../environments/environment.prod.ts" />
import { Injectable } from '@angular/core';
import { environment } from '../../src/environments/environment';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../utils/ErrorHandling'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  petStoreApiUrl: string = environment.PetStoreAPI;
  petStoreApiKey: string = environment.OcpApimSubscriptionKey;
  petStoreAuthenticateUrl: string = "user/login";
  errorHandler: ErrorHandler = new ErrorHandler();


  authenticate(userLogin: string, password: string): Observable<string> {
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.petStoreApiKey);
    const params = new HttpParams().set('username', userLogin).set('password', password);
    return this.http.get<string>(this.petStoreApiUrl + this.petStoreAuthenticateUrl, { headers, params, responseType: 'text' as 'json' }).pipe(
      catchError(this.errorHandler.handleError('getHeroes', ""))
    );
  }
  constructor(private http: HttpClient) { }

}
