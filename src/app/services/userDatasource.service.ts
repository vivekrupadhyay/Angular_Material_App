import { Injectable } from "@angular/core";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { User } from "../model/user";
import { UserService } from "./user.service";
import { catchError, finalize } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDatasourceService implements DataSource<User> {
  debugger;
  private userSubject = new BehaviorSubject<User[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();
  users:User;

  constructor(private userServices: UserService) {}
  loadUser(
    id: number,
    //filter: string,
    sortDirection: string,
    pageIndex: number,
    pageSize: number
  ) {
    debugger;
    this.loadingSubject.next(true);
    this.userServices
      .findUsers(sortDirection, pageIndex, pageSize) //userId, filter,
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))//
      )
      .subscribe((users) => {
        debugger
        this.userSubject.next(users);
        console.log(users);
      });
  }
  connect(): Observable<User[]> {
    debugger;
    console.log("Connecting data source :", this.userSubject.asObservable());
    return this.userSubject.asObservable();
  }

  disconnect(): void {
    this.userSubject.complete();
    this.loadingSubject.complete();
  }
}
