import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { EditAgentModalComponent } from '../edit-agent-modal/edit-agent-modal.component';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.page.html',
  styleUrls: ['./agent-list.page.scss'],
})
export class AgentListPage implements OnInit {
    private listAgent: User[] = [];

    constructor(private userService: UserService,
                private toastController: ToastController,
                private modalController: ModalController) { }

    ngOnInit() {
        this.refresh();
    }

    onDelete(mail: string, matr: string){
        if(this.userService.deleteAgent(mail, matr)){
            this.refresh();
        }else{
            this.presentToast("Erreur dans la suppression", "danger");
        }
    }

    refresh(){
        this.userService.getListAgent().then(
            (listAgent: any) => {
                this.listAgent = listAgent;
            }
        );
    }


    async presentToast(msg: string, color:string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            color: color,
            position: 'top'
        });
        toast.present();
      }

      async presentModal(account) {
        const modal = await this.modalController.create({
          component: EditAgentModalComponent,
          cssClass: 'my-custom-class',
          componentProps: {
              account
            // 'firstName': account.firstname,
            // 'name': account.name,
            // 'phone': account.phone,
            // 'mail': account.mail,
            // 'matricule': account.matricule,
            // 'password': account.password,
            // 'activated': account.activated
          }
        });
        modal.onDidDismiss().then(
            () => {
                this.refresh();
            }
        )
        return await modal.present();
      }

}
