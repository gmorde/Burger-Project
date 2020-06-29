import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { SlideInOutAnimation } from './slide-shopping-cart';
import { product } from 'src/app/models/burger-models';


@Component({
  selector: 'app-burger-shopping-cart',
  templateUrl: './burger-shopping-cart.component.html',
  styleUrls: ['./burger-shopping-cart.component.scss'],
  animations: [SlideInOutAnimation]
})
export class BurgerShoppingCartComponent implements OnInit {

  @Input() toggleAnimationState: boolean;
  @Input() productsCart: product[];
  public animationState = 'out';

  constructor() { }

  ngOnInit() {}


  toggleShoppingCart(status: string)
  {
    this.animationState = status;
  }


  ngOnChanges($event)
  {
    if ($event.toggleAnimationState.firstChange == false) 
    {
      this.animationState = 'in';
    }
  }


  theTotalIs()
  {
    var returnTotal = 0;
    for (var x = 0; x < this.productsCart.length; x++) 
    {
      returnTotal += this.productsCart[x].Price;
    }
    return returnTotal;
  }


  removeFromCart(index)
  {
    this.productsCart.splice(index, 1);
  }

  
}
