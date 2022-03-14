import {Component, OnInit} from '@angular/core';
import {Tenant} from "../models/tenant.model";
import {TenantService} from "../service/tenant.service";
import {TokenStorageService} from "../_services/token-storage.service";
import {UserService} from "../service/user.service";
import {Flat} from "../models/flat.model";
import {FlatService} from "../service/flat.service";
import {House} from "../models/house.model";
import {HouseService} from "../service/house.service";
import {City} from "../models/city.model";
import {CityService} from "../service/city.service";
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
    flatnumber:''
  }
  public house:House={
    id:'',
    adress:''
  };
  public city:City={
    id:'',
    city:''
  };
  house_id:any;
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  submitted3 = false;


  constructor(private tenantService: TenantService,private token: TokenStorageService,private flatService: FlatService,private  houseService: HouseService,private cityService: CityService) { }

  ngOnInit(): void {
  }

  saveTenant(): void {
    const data = {
      tenantName: this.tenants.name,
      tenantSecondName: this.tenants.secondname,
      tenantLastName: this.tenants.lastname,
      // user_id:this.id
    };
  console.log(data);
    this.tenantService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
          this.submitted3 = true;
        },
        error: (e) => console.error(e)
      });
  }

  saveCity():void{
    const data3={
      city:this.city.city
    }
    console.log(data3);
    this.cityService.create(data3)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted3 = false;
          this.submitted1 = true;
        },
        error: (e) => console.error(e)
      })
  }

  saveHouse():void{
    const  data2={
      address:this.house.adress
    }
    console.log(data2);

    this.houseService.create(data2)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.house = res;
          this.submitted1 = false;
          this.submitted2 = true;
        },
        error: (e) => console.error(e)
      });

  }

  saveFlat():void {
    const data1={
      flatNumber:this.flats.flatnumber
    };
    this.flatService.create(data1)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (e) => console.error(e)
      });


  }





}
