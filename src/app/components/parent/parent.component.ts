import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { ViewChild } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit, OnInit {

  @ViewChild(ChildComponent) child;

  message1: string;
  message2: string;
  message3: string;
  message4: string;

  parentMessage = 'message from parent';
  secoundParentMessage = 'Secound parent message to child';

  constructor(private sharedService: SharedService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.message1 = this.child.messageFromChild;
      this.message2 = this.child.fromChild;
    });
  }

  receiveMessage($event) {
    this.message3 = $event;
  }

  deleteMessage() {
    this.sharedService.changeMessage('');
  }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(x => this.message4 = x);
  }
}

// add comment
