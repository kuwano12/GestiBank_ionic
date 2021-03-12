import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent-affected-demande-list',
  templateUrl: './agent-affected-demande-list.page.html',
  styleUrls: ['./agent-affected-demande-list.page.scss'],
})
export class AgentAffectedDemandeListPage implements OnInit {
    matricule: string = "";
    agentName: string = "";
    agent: User;
    clientList: any[] = [];
    name: string = "";

    constructor(private userService: UserService,
                private activatedRoute: ActivatedRoute,
                private toastController: ToastController) { }

    ngOnInit() {
        this.name = this.activatedRoute.snapshot.params['agent'];
        this.matricule = this.activatedRoute.snapshot.params['matricule'];
        console.log(this.activatedRoute.snapshot.params);
        
        this.userService.getAgentByMatr(this.matricule).then(
            (res: User) => {
                this.agent = res;
                this.agentName = this.agent.name;
                this.userService.getAffectedClient(this.agentName).then(
                    (res: any[]) => {
                        this.clientList = res;
                        console.log(this.clientList);
                        if(!Object.keys(this.clientList).length){
                            this.presentToast("Aucun client ne vous est affecté", "success")
                        }
                        
                    }
                );
            }
        );
    }

    async presentToast(msg: string, color:string) {
        const toast = await this.toastController.create({
          message: msg,
          duration: 2000,
          color: color,
          position: 'bottom'
        });
        toast.present();
    }

    onActivateClient(mail:string){
        this.userService.changeClientStatus(mail, "t").then(
            (res) => {
                if(res){
                    this.presentToast("Client activé", "success");
                }else{
                    this.presentToast("Erreur dans l'activation", "danger");
                }
            }
        );
    }
    onDeactivateClient(mail: string){
        this.userService.changeClientStatus(mail, "f").then(
            (res) => {
                if(res){
                    this.presentToast("Client désactivé", "danger");
                }else{
                    this.presentToast("Erreur dans la désactivation", "danger");
                }
            }
        );

    }
}
