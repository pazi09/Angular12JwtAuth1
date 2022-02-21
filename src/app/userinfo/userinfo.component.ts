import {Component, OnInit} from '@angular/core';
import {Tenant} from "../models/tenant.model";
import {TenantService} from "../service/tenant.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {UserService} from "../service/user.service";
import {Flat} from "../models/flat.model";
import {FlatService} from "../service/flat.service";
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
  public flats:Flat={
    flatnumber:'',
    square:'',
    rooms:'',
  }
  id:string=this.token.getUser().id
  submitted = false;


  constructor(private tenantService: TenantService,private token: TokenStorageService,private flatService: FlatService) { }

  ngOnInit(): void {
  }

  saveTenant(): void {
    const data = {
      tenantName: this.tenants.name,
      tenantSecondName: this.tenants.secondname,
      tenantLastName: this.tenants.lastname,
      user_id:this.id
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

  saveFlat():void {
    const data1={
      flatNumber:this.flats.flatnumber,
      square: this.flats.square,
      rooms:this.flats.rooms,
    };
    console.log(data1);
    this.flatService.create(data1)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }



}
