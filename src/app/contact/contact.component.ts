import { Component } from '@angular/core';
import {
  NzNotificationService,
  NzNotificationPlacement,
} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private notification: NzNotificationService) {}
  onSend(): void {
    this.notification.blank(
      'Notification Title',
      'This service is not available righ now, please use the social media links to conatct me.'
    );
  }
}
