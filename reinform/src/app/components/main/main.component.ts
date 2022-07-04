import {AfterViewInit, Component, ViewChild} from '@angular/core';
import UsersJson from "../../../users.json";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";

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
  public users: IUsers[] = UsersJson;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    console.log(this.users);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatSort) sort: MatSort | any;
  //
  // private users$ = new BehaviorSubject<IUsers[]>(UsersJson);
  //
  // getUsers$(): any {
  //   return this.users$.asObservable();
  //
  // }
  //

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
