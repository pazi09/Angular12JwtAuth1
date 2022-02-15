import { Component, OnInit } from '@angular/core';
import {Tenant} from "../models/tenant.model";
import {TenantService} from "../service/tenant.service";
import {Router} from "@angular/router";

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
  tenants?: Tenant[];
  isLoggedIn = false;


  constructor(private tenantService: TenantService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    const { name, secondname, lastname } = this.form;
    this.tenantService.create(name, secondname, lastname).subscribe(
    data => {
      console.log(data);
    }
  );

  }


}
