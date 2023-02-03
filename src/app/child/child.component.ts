import { outputAst } from '@angular/compiler';
import { Component, EventEmitter , Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output () public childevent = new EventEmitter<number>();

  count = 0;
  
    increment() {
      this.count++;
      this.childevent.emit(this.count) ;
    }
  
    decrement() {
      this.count--;
      this.childevent.emit(this.count);
    }

}
