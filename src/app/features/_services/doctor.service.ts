import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = 'http://localhost:1996/doctor/patients';

  getAllPatients() : Observable<{status:number,data:Patient[]}>{
    return this.http.get<{status:number,data:Patient[]}>(this.baseUrl)
  }

  getPatientDetails(id:number): Observable<{status:number, data:Patient}> {
    return this.http.get<{status:number, data:Patient}>(`${this.baseUrl}/details/${id}`);
  }
  

}
