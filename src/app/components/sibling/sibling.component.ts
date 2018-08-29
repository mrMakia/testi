import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  messageFromService: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(john => this.messageFromService = john);
  }

  newMessage() {
    this.sharedService.changeMessage('Hello from Sibling!');
  }

}
