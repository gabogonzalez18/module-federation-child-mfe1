import { Component, OnInit } from '@angular/core';
import { NotificationLibService } from '../../../../../module-federation-plugin-example/projects/notification-lib/src/lib/notification-lib.service';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.scss']
})
export class Module1Component implements OnInit {

  inputs: any;

  constructor(private notificationService: NotificationLibService) { }

  ngOnInit(): void {
    console.log("OnInit(): Module1Component");
    this.inputs = this.notificationService.getData();
  }

  next() {
    this.notificationService.nextNotification(true);
  }

}
