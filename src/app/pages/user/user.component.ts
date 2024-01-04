import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm: FormGroup | any;
  user: any;
  dtData: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isEdit: boolean = false;

  constructor(private service: RestApiService) {}

  ngOnInit(): void {
    this.userForm = new FormGroup({
      useR_CODE: new FormControl(),
      useR_NAME: new FormControl(),
      useR_PHONE_NO: new FormControl(),
      useR_EMAIL: new FormControl(),
    });

    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
    };
    this.getList();
  }

  updateUser(userForm: FormGroup) {
    alert('2');
  }
  addUser(userForm: FormGroup) {
    alert('1');
    this.service.Add(this.userForm.value).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.getList();
        }
      },
    });
  }

  submit() {}

  getList() {
    this.service.GetList().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.dtData = response.value;
          this.dtTrigger.next(null);
        } else {
        }
      },
    });
  }
}
