import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import UsersJson from '../../../users.json'
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'id', 'author', 'docCode', 'docDate', 'docName', 'docType', 'address',
    'status', 'isSpecial'];
  dataSource = new MatTableDataSource<IUsers>(UsersJson);
  selection = new SelectionModel<IUsers>(true, []);
  public isOpen = false;
  public productList : any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private _liveAnnouncer: LiveAnnouncer, public cardService: CardService) {
    console.log(UsersJson)
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  addToCart(item: any){
    this.cardService.addToCart(item);
  }
}
