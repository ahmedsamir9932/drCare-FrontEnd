import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patientvisits } from '../_models/patientvisits';

@Injectable({
  providedIn: 'root'
})
export class PatientvisitsService {

  constructor(private http:HttpClient) { }

  private baseUrl:string = 'http://localhost:1996/doctor/patients/visits';
  

  getAllVisits(id:number): Observable<{status:number, visits:Patientvisits[]}>{
    return this.http.get<{status:number,visits:Patientvisits[]}>((`${this.baseUrl}/${id}`))
  }

  getvisitDetails(id:number): Observable<{status:number, visit:Patientvisits}>{
    return this.http.get<{status:number,visit:Patientvisits}>(this.baseUrl+"/details/"+id)
  }

  addDiagnosis(_id:number, diagnosis:Patientvisits):Observable<{status:number}>{
    return this.http.post<{status:number}>(`${this.baseUrl}/${_id}`, diagnosis);
  }


}
