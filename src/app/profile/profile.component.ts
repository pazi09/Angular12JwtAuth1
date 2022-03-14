import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import {Tenant} from "../models/tenant.model";
import {Flat} from "../models/flat.model";
import {House} from "../models/house.model";
import {City} from "../models/city.model";
import {CityService} from "../service/city.service";
import {HouseService} from "../service/house.service";
import {FlatService} from "../service/flat.service";
import {TenantService} from "../service/tenant.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  currentUser: any;
  isLoggedIn = false;
  info = false;


  constructor(private token: TokenStorageService,private cityService:CityService,private houseService:HouseService,private flatService:FlatService,private tenantService:TenantService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.isLoggedIn = !!this.token.getToken();
    this.showCity();
    this.showHouse();
    this.showFlat();
    this.showTenant();
  }

  showCity():void{
    this.cityService.getByUser()
      .subscribe(
        data=>{
          this.city=data;
          if(data!=null) {
            this.info = true;
          }
          console.log(data);
        }
      )


  }

  showHouse():void{
    this.houseService.getByUser()
      .subscribe(
        data1=>{
          this.house=data1;
          if(data1!=null) {
            this.info = true;
          }
          console.log(data1);
          console.log(this.house);
        }
      )
  }

  showFlat():void{
    this.flatService.getByUser()
      .subscribe(
        data2=>{
          this.flats=data2;
          if(data2!=null) {
            this.info = true;
          }
          console.log(data2);
          console.log(this.flats);
        }
      )
  }

  showTenant():void{
    this.tenantService.getByUser()
      .subscribe(
        data3=>{
          this.tenants=data3;
          if(data3!=null) {
            this.info = true;
          }
          console.log(data3);
          console.log(this.tenants);
        }
      )
  }

}
