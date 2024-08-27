import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimengModule } from './primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';
import { LayoutModule } from './components/layout/layout.module';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PrimengModule,FormsModule,AccountModule,LayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {
  title = 'demoProject';
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    // this.ts.hello();
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
  };
 
}
}
