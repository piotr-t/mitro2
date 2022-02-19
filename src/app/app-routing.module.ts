import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  { path: 'Page', component: HomeComponent },
  { path: 'Home', component: StartPageComponent },
  { path: '**', component: StartPageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // { relativeLinkResolution: 'legacy' } LocationStrategy, {useClass: HashLocationStrategy}
  exports: [RouterModule]
})
export class AppRoutingModule { }
