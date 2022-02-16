import { Component, OnInit } from '@angular/core';
import {Tenant} from "../models/tenant.model";
import {TenantService} from "../service/tenant.service";
import {TokenStorageService} from "../_services/token-storage.service";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  form: any = {
    name: null,
    secondname: null,
    lastname:null
  };
  tenants: Tenant={
    name:'',
    secondname:'',
    lastname:''
  };
  submitted = false;
  isLoggedIn = false;


  constructor(private tenantService: TenantService) { }

  ngOnInit(): void {
  }

  saveTenant():void {
    const data={
      name:this.tenants.name,
      secondname:this.tenants.secondname,
      lastname:this.tenants.lastname,
    };
    this.tenantService.create(data)
      .subscribe(
        response=>{
          console.log(response);
          this.submitted=true;
        },
        error => {
          console.log(error);
        });
  }



}
