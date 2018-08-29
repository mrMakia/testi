import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject('default message from Service'); // private BehaviorSubject that holds current message.
  currentMessage = this.messageSource.asObservable(); // observable data stream, components can subscribe to.

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message); // calls next on the Behavior Subject to change the message.
  }
}
