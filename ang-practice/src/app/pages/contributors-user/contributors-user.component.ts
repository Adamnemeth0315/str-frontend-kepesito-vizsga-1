import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-contributors-user',
  templateUrl: './contributors-user.component.html',
  styleUrls: ['./contributors-user.component.scss']
})
export class ContributorsUserComponent implements OnInit {

  userList$: Observable<User[]> = this.userService.getUsers();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
