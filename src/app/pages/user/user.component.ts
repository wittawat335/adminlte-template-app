import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private service: RestApiService) {}

  dtData: any;
  ngOnInit(): void {}
  dtoptions: DataTables.Settings = {};

  getList() {
    this.service.GetList().subscribe({
      next: (data){
        if(data.status){
          this.dtData = data.value; 
        } else{

        }
      }
    })
  }
}
