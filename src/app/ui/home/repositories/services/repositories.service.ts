import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from '../interfaces/repositories';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  apiUrl = 'https://api.github.com/users';

  constructor(
    private http: HttpClient,
  ) { }

  get(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/ysebasst/repos`)
      .pipe(
        map(res => {
          return res.sort((a, b) => b.topics.length > a.topics.length ? 1 : -1);
        })
      );
  }
}
