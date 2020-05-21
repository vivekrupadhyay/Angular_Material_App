import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ErrorHandler,
  ElementRef,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { MatIcon } from "@angular/material/icon";
import { MatPaginator } from "@angular/material/paginator";
import { User } from "./../../model/user";
import { UserService } from "src/app/services/user.service";
import { GlobalErrorHandlerServiceService } from "src/app/services/GlobalErrorHandlerService.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserDatasourceService } from "src/app/services/userDatasource.service";
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = [
    "firstname",
    "lastname",
    "email",
    "mobile",
    "update",
    "delete",
  ];

  //public dataSource = new MatTableDataSource<User>();
  //dataSource: any;
  users: User;

  dataSource: UserDatasourceService;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild("TABLE", { static: true }) table: ElementRef;
  constructor(
    private userServices: UserService,
    private errorHandler: GlobalErrorHandlerServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    debugger;
    //this.users = this.route.snapshot.data["list-user"];
    this.dataSource = new UserDatasourceService(this.userServices);
    this.dataSource.loadUser(this.users.userID,"asc", 0, 3); //this.users.userID, '',
  }
  ngAfterViewInit(): void {
   this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }
  loadLessonsPage() {
    this.dataSource.loadUser(
      this.users.userID,
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
  // getAllUsers() {
  //   debugger;
  //   this.userServices.getUsers("user").subscribe(
  //     (data: User[]) => {
  //       this.dataSource = new MatTableDataSource<User>(data as User[]);
  //       console.log(this.dataSource);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     (error) => {
  //       this.errorHandler.handleError(error);
  //     }
  //   );
  // }
  public customSort = (event) => {
    console.log(event);
  };

  public doFilter = (value: string) => {
    //this.dataSource.filter = value.trim().toLocaleLowerCase();
  };

  public redirectToDetails = (id: string) => {
    let url: string = `/user/details/${id}`;
    this.router.navigate([url]);
  };

  public redirectToUpdate = (id: string) => {};

  public redirectToDelete = (id: string) => {};
  onRowClicked(row) {
    console.log("Row clicked: ", row);

  }
}
