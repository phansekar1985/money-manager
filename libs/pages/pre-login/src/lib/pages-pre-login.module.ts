import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesPreLoginRoutes } from './lib.routes';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesPreLoginRoutes)],
  declarations: [OverviewComponent],
  exports: [OverviewComponent],
})
export class PagesPreLoginModule {}
