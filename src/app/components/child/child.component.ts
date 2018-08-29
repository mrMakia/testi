import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string;
  @Input() secoundMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  outputMessage = 'Output on click from child';

  messageFromChild = 'Message From child';
  fromChild = 'From child';

  messageFromService: string;

  constructor(private sharedService: SharedService) { }

  sendMessage() {
    this.messageEvent.emit(this.outputMessage);
  }

  changeMessage() {
    this.sharedService.changeMessage('Message change from child');
  }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(x => this.messageFromService = x);
  }

}
