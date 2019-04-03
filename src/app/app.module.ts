import {Routes, RouterModule} from '@angular/router';
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
import { TaskComponent } from './pages/task/task.component';
import { HomeComponent } from './pages/home/home.component';
import { KanbanComponent } from './pages/kanban/kanban.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FilesComponent } from './pages/files/files.component';
import { MyTasksComponent } from './pages/my-tasks/my-tasks.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const appRoutes: Routes =[
	{ path: '', component: HomeComponent},
	{ path: 'task', component: TaskComponent},
	{ path: 'kanban', component: KanbanComponent},
	{ path: 'activity', component: ActivityComponent},
	{ path: 'calendar', component: CalendarComponent},
	{ path: 'files', component: FilesComponent},
	{ path: 'my-tasks', component: MyTasksComponent},
	{ path: 'notifications', component: NotificationsComponent},
	{ path: '**', component: NotFoundComponent }
];

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
    TaskComponent,
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
		RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
