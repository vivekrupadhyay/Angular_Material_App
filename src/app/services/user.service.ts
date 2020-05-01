import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { User } from "./../model/user";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  save(user: User) {
    var apiurl = environment.apiEndPoint + "/api/user/add";
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http
      .post<User>(apiurl, user, { headers: headers })
      .pipe(catchError(this.handleError));
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
}
