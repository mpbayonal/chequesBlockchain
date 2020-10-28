import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { ChequesComponent } from '../../pages/Components/cheques/cheques.component';
import { ButtonViewComponent } from '../../pages/Components/cheques/cheques.component';
import { ChequesDetalleComponent } from '../../pages/Components/cheques-detalle/cheques-detalle.component';
import {Ng2SmartTableModule} from "ng2-smart-table";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdminLayoutComponent} from "./admin-layout.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
      Ng2SmartTableModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    ChequesComponent,
    ChequesDetalleComponent,
    ButtonViewComponent
  ]
})

export class AdminLayoutModule {}
