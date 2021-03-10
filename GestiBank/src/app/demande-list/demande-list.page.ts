import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-demande-list',
  templateUrl: './demande-list.page.html',
  styleUrls: ['./demande-list.page.scss'],
})
export class DemandeListPage implements OnInit {
    listDemand: any[] = [];
    listAgent: any[] = [];

    constructor(private userService: UserService,
                private toastController: ToastController) { }

    ngOnInit() {
        this.refresh();
    }

    onAffectClient(form: NgForm, mail: string){
        const agent = form.value.agent;
        if(agent != null || agent != ""){
            this.userService.affectClient(mail, agent).then(
                (data) => {
                    if(data){
                        let msg = "Client affecté à " + agent;
                        this.presentToast(msg, "success");
                        this.refresh();
                    }
                }
            );
        }
    }

    refresh(){
        this.userService.getDemandList("w").then(
            (res: any[]) => {
                this.listDemand = res;
                console.log(this.listDemand);
            }
        );
        this.userService.getListAgent().then(
            (res: any[]) => {
                this.listAgent = res;
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
}
