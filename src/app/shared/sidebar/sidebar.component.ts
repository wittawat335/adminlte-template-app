// sidebar.component.ts

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}
  ngOnInit(): void {}
}
