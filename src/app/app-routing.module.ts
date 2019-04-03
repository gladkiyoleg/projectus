import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './pages/activity/activity.component';
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
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }