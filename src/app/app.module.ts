import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './header/menu/menu.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityItemComponent } from './pages/activity/activity-item/activity-item.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarUserComponent } from './sidebar/sidebar-user/sidebar-user.component';
import { SidebarSearchComponent } from './sidebar/sidebar-search/sidebar-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    ActivityComponent,
    ActivityItemComponent,
    SidebarMenuComponent,
    SidebarUserComponent,
    SidebarSearchComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
