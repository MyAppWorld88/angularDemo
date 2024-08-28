import { Component, EventEmitter, OnInit, Output, ViewChild, output } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { faDashboard,faBars,faCoffee,faCircleRight,faCircleLeft} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit{
  @Output() changeWidth = new EventEmitter<any>();
  faDashboard = faDashboard;
  faBars = faBars;
  faCoffee=faCoffee;
  faCircleRight=faCircleRight;
  faCircleLeft=faCircleLeft;
  isSidebarClosed = true;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  showFiller = false;
  ngOnInit(): void {

  }
  changeWidthData() {
    this.toggleSidebar();
    const data = this.isSidebarClosed==false?'change':'notChange';
    this.changeWidth.emit(data);

  }
  


  


}
