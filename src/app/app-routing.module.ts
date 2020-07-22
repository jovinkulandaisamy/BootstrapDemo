import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { FirstComponent } from './first/first.component';
const routes: Routes = [

  { path: 'screen1', component: Screen1Component },
  {path:'screen2',component:Screen2Component},
   {path:'first',component:FirstComponent},
      {path:'',component:FirstComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
