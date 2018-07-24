import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedsModule } from '../shareds/shareds.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRouting,
    SharedsModule //โมดูลไว้แชร์ จากไฟล์ shared.module.ts
  ],
  declarations: [
    SettingComponent,
    ProfileComponent,
    DashboardComponent
  ]
})
export class AuthenticationModule { }
