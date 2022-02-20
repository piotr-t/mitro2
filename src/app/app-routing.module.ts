import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  { path: 'Page', component: HomeComponent },
  { path: 'Home', component: StartPageComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
   // { relativeLinkResolution: 'legacy' } LocationStrategy, {useClass: HashLocationStrategy}
  exports: [RouterModule]
})
export class AppRoutingModule { }
