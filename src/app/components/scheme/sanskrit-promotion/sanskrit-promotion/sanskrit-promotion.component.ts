import { Component } from '@angular/core';
import { PersonalDetailComponent } from '../personal-detail/personal-detail.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from '../../../../primeng/primeng.module';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-sanskrit-promotion',
  standalone: true,
  imports: [PersonalDetailComponent,FormsModule,PrimengModule,FieldsetModule,AvatarModule],
  templateUrl: './sanskrit-promotion.component.html',
  styleUrl: './sanskrit-promotion.component.scss'
})
export class SanskritPromotionComponent {

}
