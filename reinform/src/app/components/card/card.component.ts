import { Component, OnInit } from '@angular/core';
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public products : any = [];

  constructor(private cardService : CardService) { }

  ngOnInit(): void {
  }

}
