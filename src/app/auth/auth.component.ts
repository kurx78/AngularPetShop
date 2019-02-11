import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel'
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  currentUserModel: UserModel = { userLogin: "", password:"" };
  constructor(private userService: UserService, public router: Router) { }
  public loading = false;

  authenticate() {
    this.loading = true;
    this.userService.authenticate(this.currentUserModel.userLogin,this.currentUserModel.password)
      .subscribe(result => {
        this.loading = false;
        this.router.navigate(['/inventory']);
      });
  }
  ngOnInit() {
  }

}
