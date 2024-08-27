import { Component } from '@angular/core';
import { PrimengModule } from '../../../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PrimengModule,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  sidebarVisible1: boolean = false;
    
    sidebarVisible2: boolean = false;
    
    sidebarVisible3: boolean = false;
    
    sidebarVisible4: boolean = false;
}
