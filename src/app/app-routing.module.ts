import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadFileComponent } from './download-file/download-file.component';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Pobierz', component: DownloadFileComponent  },
  { path: '**', redirectTo: '/', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
   // { relativeLinkResolution: 'legacy' } LocationStrategy, {useClass: HashLocationStrategy}
  exports: [RouterModule]
})
export class AppRoutingModule { }
