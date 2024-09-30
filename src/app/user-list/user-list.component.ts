import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { UserListComponent } from './user-list.component';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}

@NgModule({
  declarations: [UserListComponent], // Add UserListComponent to declarations
  imports: [CommonModule],
  exports: [UserListComponent] // Export UserListComponent
})
export class UserListModule { }
