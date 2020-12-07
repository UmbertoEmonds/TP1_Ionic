import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {}

  findAll(){
    let URL = BASE_URL + "students"
    return this.http.get(URL, {observe: "response"})
  }

  findAllById(id: number){
    let URL = BASE_URL + "students/" + id
    return this.http.get(URL, {observe: "response"})
  }

}
