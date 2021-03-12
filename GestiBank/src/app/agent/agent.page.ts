import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {
    matricule: string;
    agent: User;
    agentName: string = "";
    agentFirstname: string = "";
    agentMatr: string = "";


    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.matricule = this.activatedRoute.snapshot.params['matricule'];
        this.userService.getAgentByMatr(this.matricule).then(
            (res: User) => {
                this.agent = res;
                this.agentName = this.agent.name;
                this.agentFirstname = this.agent.firstname;
                this.agentMatr = this.agent.matricule;
            }
        );
    }

    signOut(){
        this.router.navigate(['/home']);
    }

}
