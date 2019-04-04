import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './post.service';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './header/menu/menu.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { ActivityItemComponent } from './pages/activity/activity-item/activity-item.component';
import { SidebarMenuComponent } from './sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarUserComponent } from './sidebar/sidebar-user/sidebar-user.component';
import { SidebarSearchComponent } from './sidebar/sidebar-search/sidebar-search.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksItemComponent } from './pages/tasks/tasks-item/tasks-item.component';
import { HomeComponent } from './pages/home/home.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FilesComponent } from './pages/files/files.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


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
    TasksComponent,
    TasksItemComponent,
    HomeComponent,
    KanbanComponent,
    CalendarComponent,
    FilesComponent,
    MyTasksComponent,
    NotificationsComponent,
    NotFoundComponent,
  ],
  imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule 
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
