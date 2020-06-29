import { Component, HostListener, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { categorie, product } from '../../models/burger-models';
import { BurgerService } from '../../services/burger.service';
import { MatMenuModule } from '@angular/material/menu';
import { DOCUMENT } from '@angular/common';
import { error } from 'selenium-webdriver';
declare var google: any;

@Component({
  selector: 'app-burger-shop',
  templateUrl: './burger-shop.component.html',
  styleUrls: ['./burger-shop.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(150, style({opacity: 1}))
      ])
    ])
  ]
})
export class BurgerShopComponent implements OnInit {

  public toggleAnimationState = false;
  public innerWidth: number;
  public CategorieId = 1;
  public categories: categorie[];
  public products: product[];
  public productsCart: product[] = [];

  public location = { lat: 32.091245, lng: 34.831339 };
  public map;
  public marker;
  public zoom;
  @ViewChild('map', {static: false}) mapRef: ElementRef;


  constructor(
    private TheBurgerService: BurgerService,
    @Inject(DOCUMENT)
    private document: Document
  ) { }


  ngOnInit()
  {
    this.TheBurgerService.getAllCategories().subscribe(
      res => { this.categories = res; },
      err => { console.log(err); });
    this.TheBurgerService.getAllProducts().subscribe(
      res => { this.products = res; },
      err => { console.log(err); }
    );

    this.innerWidth = window.innerWidth;
  }


  ngAfterViewInit()
  {
    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 15,
        center: this.location
      });
      this.marker = new google.maps.Marker({
        position: this.location,
        map: this.map,
        icon: "../../assets/images/location-logo.png",
      });
    }, 500);
  }


  scrollToBurger(el: HTMLElement)
  {
    el.scrollIntoView({behavior:"smooth"});
  }


  @HostListener('window:resize', []) onResize()
  {
    this.innerWidth = window.innerWidth;
  }


  @HostListener('window:scroll', []) onWindowScroll()
  {
    if (this.innerWidth > 826)
    {
      if (document.body.scrollTop > 767 || document.documentElement.scrollTop > 767) 
      {
        document.getElementById('categories-navbar-wrapper').classList.add('categories-navbar-fixed');
      }
      if (document.body.scrollTop > 767 || document.documentElement.scrollTop < 767) 
      {
        document.getElementById('categories-navbar-wrapper').classList.remove('categories-navbar-fixed');
      }
    }
  }


  changeCategorieId(id)
  {
    this.CategorieId = id;
  }


  filterProductsByCategorie()
  {
    if (this.products !== undefined)
    {
      return this.products.filter(x => x.CategorieId === this.CategorieId);
    }
  }


  addToCart(product, $event)
  {
    this.productsCart.push(product);
  }


  notInCart(product)
  {
    for (var x = 0; x < this.productsCart.length; x++)
    {
      if (this.productsCart[x].ProductId === product.ProductId)
      {
        return true;
      }
    }
  }


}
