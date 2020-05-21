import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { User } from "./../model/user";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  save(user: User) {
    debugger;
    var apiurl = environment.apiEndPoint + "/user/add";
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post<User>(apiurl, user, { headers: headers })
      .pipe(catchError(this.handleError));
  }
  getUsers(route: string) {
    return this.http.get(
      this.createComplexRoot(route, environment.apiEndPoint)
    );
  }
  private createComplexRoot(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occured", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was:${error.error}`
      );
    }
    return throwError("Please try again letter.");
  }
  findUsers(
    // userID: number,
    // filter = "",
    sortOrder = "asc",
    pageNumber = 0,
    pageSize = 3
  ): Observable<User[]> {
    return this.http
      .get(environment.apiEndPoint+"/user", {
        params: new HttpParams()
          // .set("userID", userID.toString())
          // .set("filter", filter)
          .set("sortOrder", sortOrder)
          .set("pageNumber", pageNumber.toString())
          .set("pageSize", pageSize.toString()),
      })
      .pipe(map((res) => res["users"]));//["user"]
  }
}
