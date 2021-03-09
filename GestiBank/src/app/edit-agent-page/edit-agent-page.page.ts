import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-agent-page',
  templateUrl: './edit-agent-page.page.html',
  styleUrls: ['./edit-agent-page.page.scss'],
})
export class EditAgentPagePage implements OnInit {
    mail: string;
    matricule: string
    agent: User[] = [];

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.mail = this.activatedRoute.snapshot.params['mail'];
        this.matricule = this.activatedRoute.snapshot.params['matricule'];
        this.userService.getAgentByMail(this.matricule).then(
            (res: User[]) => {
                this.agent = res;                
            }
        );
    }
}
