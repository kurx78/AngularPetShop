/// <reference path="../environments/environment.prod.ts" />
import { Injectable } from '@angular/core';
import { environment } from '../../src/environments/environment';
import { HttpHeaders, HttpParams, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../utils/ErrorHandling'
import { Pet,Category,Tag } from '../models/PetModel'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  petStoreApiUrl: string = environment.PetStoreAPI;
  petStoreApiKey: string = environment.OcpApimSubscriptionKey;
  petStoreGetPetsByStatusUrl: string = "/pet/findByStatus";
  petStoreBasePetUrl: string = "pet/";
  errorHandler: ErrorHandler = new ErrorHandler();

  getPetsByStatus(petStatus: string): Observable<Pet[]> {
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.petStoreApiKey);
    const params = new HttpParams().set('status', petStatus);
    return this.http.get<Pet[]>(this.petStoreApiUrl + this.petStoreGetPetsByStatusUrl, { headers, params }).pipe(
      catchError(this.errorHandler.handleError('getPetsByStatus', []))
    );
  }
  deletePet(petId: number): Observable<HttpResponse<null>> {
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.petStoreApiKey);
    return this.http.delete<HttpResponse<null>>(this.petStoreApiUrl + this.petStoreBasePetUrl + petId, { headers }).pipe(
      catchError(this.errorHandler.handleError('deletePet', null))
    );
  }
  updatePet(pet: Pet): Observable<HttpResponse<null>> {
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.petStoreApiKey);
    return this.http.put<HttpResponse<null>>(this.petStoreApiUrl + this.petStoreBasePetUrl,pet,{ headers }).pipe(
      catchError(this.errorHandler.handleError('updatePet', null))
    );
  }
  InsertPet(pet: Pet): Observable<HttpResponse<null>> {
    const headers = new HttpHeaders().set("Ocp-Apim-Subscription-Key", this.petStoreApiKey);
    return this.http.post<HttpResponse<null>>(this.petStoreApiUrl + this.petStoreBasePetUrl, pet, { headers }).pipe(
      catchError(this.errorHandler.handleError('InsertPet', null))
    );
  }
  constructor(private http: HttpClient) { }
}
