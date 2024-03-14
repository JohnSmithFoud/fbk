import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRuComponent } from './home-ru/home-ru.component';
import { HomeEngComponent } from './home-eng/home-eng.component';

const routes: Routes = [
  {
    path: 'ru',
    component: HomeRuComponent,
    title: 'Вместе против Путина'
  },
  {
    path: 'eng',
    component: HomeEngComponent,
    title: 'Together against Putin'
  },
  {
    path: "**",
    redirectTo: 'ru'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
