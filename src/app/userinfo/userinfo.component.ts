import {Component, OnInit} from '@angular/core';
import {Tenant} from "../models/tenant.model";
import {TenantService} from "../service/tenant.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {UserService} from "../service/user.service";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
;

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  public tenants: Tenant={
    name:'',
    secondname:'',
    lastname:''
  };

  submitted = false;
  public user: User={
    username:'',
    password:''
  };


  constructor(private tenantService: TenantService,private token: TokenStorageService,private userService: UserService) { }

  ngOnInit(): void {
  }

  saveTenant(): void {
    const data = {
      tenantName: this.tenants.name,
      tenantSecondName: this.tenants.secondname,
      tenantLastName: this.tenants.lastname,
    };
  console.log(data);
    this.tenantService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }



}
