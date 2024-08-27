import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputGroupModule,InputGroupAddonModule,ButtonModule, PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  
  constructor(private router: Router ) {

  }

  ngOnInit(): void {
  
  }
  login(){
    this.router.navigate(['/auth/dashboard'])
  }



  


}
