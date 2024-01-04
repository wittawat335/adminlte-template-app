import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private service: RestApiService) {}

  dtData: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      //  paging:false
      language: {
        searchPlaceholder: 'search ',
      },
    };
    this.getList();
  }

  getList() {
    this.service.GetList().subscribe({
      next: (response) => {
        console.log(response);
        if (response.isSuccess) {
          this.dtData = response.value;
          this.dtTrigger.next(null);
        } else {
        }
      },
    });
  }
}
