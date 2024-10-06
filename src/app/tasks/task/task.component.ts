import {Component, Input, inject} from '@angular/core';
import {CardComponent} from "../../share/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";

interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) task!: Task;
private tasksService=inject(TasksService);


onCompleteTask(){
this.tasksService.removeTask(this.task.id);
}
}
