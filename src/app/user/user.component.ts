import { Component, Input,Output,EventEmitter} from '@angular/core';
import {CardComponent} from "../share/card/card.component";

interface User {
  name: string,
  id:string,
  avatar:string,
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [
    CardComponent
  ]
})
export class UserComponent {
@Input({required:true}) user!:User;
@Input({required:true}) selected!:boolean;
@Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
