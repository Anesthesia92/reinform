import { Component, OnInit } from '@angular/core';
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public products : any = [];
  public inputsDisabled: boolean = true;

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
    this.cardService.getProducts()
      .subscribe((res: any)=> {
        this.products = res;
        console.log(res);
      })
  }
  public emptyCard(): void{
    this.cardService.removeAllCart();
  }

  public toggleInputsDisabled(): void {
    this.inputsDisabled = !this.inputsDisabled;
  }
}
