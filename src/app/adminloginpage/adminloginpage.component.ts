import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-adminloginpage',
  templateUrl: './adminloginpage.component.html',
  styleUrls: ['./adminloginpage.component.css']
})
export class AdminloginpageComponent implements OnInit {

  loginInfo: FormGroup;
  response: any;
  token = ''

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
    this.loginInfo = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onAdminLogin() : void {
    console.log(this.loginInfo.value);
    
    this.loginService.adminLogin(this.loginInfo.value).subscribe(Response => {
      this.token = Response.token
      console.log(this.token)
    })
  }

  logout() : void {
    this.token = ''
  }

}
