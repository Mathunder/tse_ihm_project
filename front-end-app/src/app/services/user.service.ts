import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    constructor(private http: HttpClient){}

    userUrl = "assets/users.json";
    getUsers():Observable<User[]>{
        return this.http.get<User[]>(this.userUrl);
    }
}