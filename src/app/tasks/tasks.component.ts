import { Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) name!: string;
@Input({required:true}) userId!: string;
isAddingTasks: boolean=false;
constructor(private  tasksService: TasksService) {
}
 get selectedUserTask () {
   return this.tasksService.getUserTasks(this.userId);
 }
  onStartAddTask(){
this.isAddingTasks=true;
  }

  onCloseAddTask(){
    this.isAddingTasks=false;
  }
}
