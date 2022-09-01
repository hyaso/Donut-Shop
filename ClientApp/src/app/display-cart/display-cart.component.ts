import { Component, OnInit } from '@angular/core';
import { CartService, CartDetails } from '../cart.service';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {

  constructor(private thisCartService: CartService) {
    this.cartDetailsDisplay = thisCartService.GetCartDetails();
  }

  public thisRemoveDonut(donutId: number) {
    this.thisCartService.removeFromCart(donutId);
  }
  public cartDetailsDisplay: CartDetails | null = null;

  ngOnInit(): void {
  }
}
