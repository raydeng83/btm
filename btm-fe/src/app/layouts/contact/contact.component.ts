import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ContactService} from '../../shared/services/contact.service';
import {Message} from '../../shared/models/message';
import {NotificationsService, NotificationType} from 'angular2-notifications';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    private message;

    contactForm: FormGroup;



    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private notificationService: NotificationsService
    ) {
        this.message = new Message();
        console.log(this.message);
    }

    create(content) {

        let title = '消息已发送';
        let type = 'success';
        // @ts-ignore
        this.notificationService.create(title, content, type, {
            timeOut: 6000,
            showProgressBar: true,
            pauseOnHover: true,
            position: ['top', 'left']
        });
    }


    onSendMessage() {
        this.contactService.sendMessage(this.message).subscribe(
            res => {
                console.log(res.text());
                let content = '我们会尽快回复您，谢谢！';
                this.create(content);
            }
        );
    }

    ngOnInit() {
        this.contactForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.email]],
            subject: ['', [Validators.required]],
            message: ['', Validators.required]
        });
    }

}
