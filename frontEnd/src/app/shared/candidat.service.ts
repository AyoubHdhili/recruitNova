import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Candidat } from './candidat.model';

@Injectable({
  providedIn: 'root'
})


export class CandidatService {
  endPoint = 'http://localhost:3000/candidat';
  //private headers = new HttpHeaders().set('Content-type','application/json');

  constructor(private http: HttpClient) { }

  postCandidat(candidat : Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(this.endPoint, {candidat});
  }
  getCandidats(){
    return this.http.get(this.endPoint+'/');
  }
  updateCandidate(candidat : Candidat){
    return this.http.put(`${this.endPoint}/${candidat._id}`, {candidat});
  }
  deleteCandidate(id : string){
    console.log(id);
        
    return this.http.delete(`${this.endPoint}/${id}`);
  }
}
