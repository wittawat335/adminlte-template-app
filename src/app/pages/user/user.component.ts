import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from 'src/app/Interfaces/user';
import { RestApiService } from 'src/app/services/rest-api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, AfterViewInit {
  @ViewChild('closebutton') closebutton!: ElementRef;
  @ViewChild(DataTableDirective) dtElement!: DataTableDirective;
  userForm: FormGroup;
  dtData: any;

  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isEdit: boolean = false;
  submitted = false;

  constructor(
    private service: RestApiService,
    private utService: UtilitiesService,
    private FormBuilder: FormBuilder
  ) {
    this.userForm = this.FormBuilder.group({
      useR_CODE: ['', Validators.required],
      useR_FIRSTNAME: ['', Validators.required],
      useR_LASTNAME: ['', Validators.required],
      useR_PHONE_NO: ['', Validators.required],
      useR_EMAIL: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching: true,
      lengthChange: false,
      //destroy: true,
    };
    this.getList();

    //this.setData();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next(null);
  }

  getList() {
    this.service.GetList().subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.dtData = response.value;
          this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.destroy();
            this.dtTrigger.next(null);
          });
        } else {
          this.utService.swalProgressBar('error', response.message);
        }
      },
    });
  }

  add() {
    this.isEdit = false;
    this.userForm.reset();
  }
  editUser(user: User) {
    if (user != null) {
      this.isEdit = true;
      this.userForm.patchValue({
        useR_CODE: user.useR_CODE,
        useR_FIRSTNAME: user.useR_FIRSTNAME,
        useR_LASTNAME: user.useR_LASTNAME,
        useR_PHONE_NO: user.useR_PHONE_NO,
        useR_EMAIL: user.useR_EMAIL,
      });
    }
  }

  addUser(userForm: FormGroup) {
    this.service.Add(this.userForm.value).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.closebutton.nativeElement.click();
          this.utService.swalProgressBar('success', response.message);
          this.getList();
        } else this.utService.swalProgressBar('error', response.message);
      },
    });
  }

  updateUser(userForm: FormGroup) {
    this.service.Update(this.userForm.value).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.closebutton.nativeElement.click();
          this.utService.swalProgressBar('success', response.message);
          this.getList();
        } else this.utService.swalProgressBar('error', response.message);
      },
    });
  }

  deleteUser(code: string) {
    this.service.Delete(code).subscribe({
      next: (response) => {
        if (response.isSuccess) {
          this.closebutton.nativeElement.click();
          this.utService.swalProgressBar('success', response.message);
          this.getList();
        } else this.utService.swalProgressBar('error', response.message);
      },
    });
  }

  // setData() {
  //   this.userForm = new FormGroup({
  //     useR_CODE: new FormControl(),
  //     useR_NAME: new FormControl(),
  //     useR_SURNAME: new FormControl(),
  //     useR_PHONE_NO: new FormControl(),
  //     useR_EMAIL: new FormControl(),
  //   });
  // }
}
