import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Patient } from '../_models/patient';
import { Patientvisits } from '../_models/patientvisits';
import { Patient } from '../_models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  basicInfoUrl:string = 'http://localhost:1996/patient/profile';
  diagnosisUrl:string = 'http://localhost:1996/patient/profile/visits';

  // Make a new Model for Gathering all Patient Data
  getPatientBasicInfo(): Observable<{status:number, data:Patient}>{
    return this.http.get<{status:number, data:Patient}>(this.basicInfoUrl);
  }

  getPatientDiagnosis(): Observable<{status:number, data:Patientvisits[]}>{
    return this.http.get<{status:number, data:Patientvisits[]}>(this.diagnosisUrl);
  }


}
