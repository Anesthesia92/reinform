import { Injectable } from '@angular/core';
import UsersJson from '../../users.json'
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CardService {

  public users: IUsers[] = UsersJson;
  public cartItemList: any = [];
  private users$ = new BehaviorSubject<IUsers[]>(UsersJson);
  private IAuthor: IAuthor | any

  getProducts(): any {
    return this.users$.asObservable();
  }

  addToCart(product : any){
    this.cartItemList.push(product);
    this.users$.next(this.cartItemList);
    console.log(product)
  }

  addDoc(isSpecial: boolean) {
    const newRow: IUsers = {
      id: Date.now().toString(),
      author: this.IAuthor,
      docCode: '',
      docDate: '',
      docName: '',
      docType: '',
      address: '',
      status: '',
      isSpecial
    };

    this.users = [...this.users, newRow];
    this.users$.next([...this.users]);
  }
  removeAllCart(){
    this.cartItemList = []
    this.users$.next(this.cartItemList);
  }
}
