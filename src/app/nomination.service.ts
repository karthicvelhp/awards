import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NominationService {

  constructor(private httpClient: HttpClient) { }

  public createCustomer(data) {
    return this.httpClient.post('', data);
  }
}
