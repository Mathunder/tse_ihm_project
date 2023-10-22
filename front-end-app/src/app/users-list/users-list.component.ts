import { Component, OnInit} from '@angular/core';
import { User } from 'src/interfaces/user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  constructor(private userService: UserService){}
  users: Observable<User[]> | undefined;

  showUser() {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.showUser();
  }
}
