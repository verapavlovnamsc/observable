import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Post } from './models/post';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpUrl = 'http://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {
  }

  GetPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.httpUrl}/posts`);
  }

  GetPostsForUser(userId: number): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.httpUrl}/posts?userId=${userId}`);
  }

  GetUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.httpUrl}/users`);
  }

  PostPosts(posts: Array<Post>): Observable<Post[]> {
    return this.http.post<Post[]>(`${this.httpUrl}/posts`, posts);
  }
}

