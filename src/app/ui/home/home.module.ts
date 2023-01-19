import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MainModule } from './main/main.module';
import { AboutMeModule } from './about-me/about-me.module';
import { SkillsModule } from './skills/skills.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { ContactModule } from './contact/contact.module';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MainModule,
    AboutMeModule,
    SkillsModule,
    RepositoriesModule,
    ExperienceModule,
    EducationModule,
    ContactModule,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
