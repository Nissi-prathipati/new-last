import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;

  item: any;

  price: any;

  image: any;

  Sharedobj: any;
  name: any;

 

  constructor(private router:Router,public serviceobj:AppServiceService){

  }

  ngOnInit():void{

    this.Sharedobj = this.serviceobj.getSharedData()

    console.log(this.Sharedobj);

    this.id = this.Sharedobj.id;

    this.name = this.Sharedobj.name;

    this.image=this.Sharedobj.image;

    this.price = this.Sharedobj.price;

  }

  onSubmit(form:any){

    console.log(form.value);

    if(form.valid){

      this.serviceobj.updateproduct(form.value).subscribe(res => {

        this.router.navigate(['product']);

      }, err => {

        alert ('Something went wrong');

      })

    }

  }

  homeclick(){

    this.router.navigate(['Login']);  

  }
}
