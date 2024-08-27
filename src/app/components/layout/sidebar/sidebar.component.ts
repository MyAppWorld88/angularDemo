import { Component, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { faDashboard,faBars,faCoffee,faCircleRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
  faDashboard = faDashboard;
  faBars = faBars;
  faCoffee=faCoffee;
  faCircleRight=faCircleRight;
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  showFiller = false;
  ngOnInit(): void {

  }
  


  


}
