import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent {
  public title!: string;
  public titleSubs$: Subscription;
  constructor(private router: Router) {
    this.titleSubs$ = this.getArgumentos().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminLte - ${title}`;
    });
  }
  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getArgumentos() {
    return this.router.events.pipe(
      filter((event: any) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
}
