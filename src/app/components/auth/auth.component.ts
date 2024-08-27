import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';
import { PrimengModule } from '../../primeng/primeng.module';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterModule,LayoutModule,PrimengModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
