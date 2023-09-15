import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }   //DI

  totalamount: any;

  ngOnInit(): void

  {

    this.totalamount = this.activatedRoute.snapshot.params["id"];  //total amount is refered

  }

}
