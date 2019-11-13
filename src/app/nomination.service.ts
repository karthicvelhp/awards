import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NominationService {


  constructor(private httpClient: HttpClient) { }

  public createCustomer(data) {
    return this.httpClient.post('http://192.168.1.10:9090/api/v1/myself/save', data);
  }
}
