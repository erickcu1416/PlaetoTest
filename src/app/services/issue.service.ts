import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const defaultUsername = 'erickcu1416';
const defaultProject = 'socket-server-v2';


@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getAllIssues(username: string = defaultUsername, project: string = defaultProject): any {
    return this.http.get(`${this.API_URL}/${username}/${project}/issues`);
  }
}
