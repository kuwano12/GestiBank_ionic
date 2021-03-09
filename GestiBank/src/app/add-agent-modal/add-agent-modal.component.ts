import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-agent-modal',
  templateUrl: './add-agent-modal.component.html',
  styleUrls: ['./add-agent-modal.component.scss'],
})
export class AddAgentModalComponent implements OnInit {
    id: string;

    constructor(private modalController: ModalController,
                private userService: UserService,
                private toastController: ToastController) { }

    ngOnInit() {}

    dismissModal(){
        this.modalController.dismiss();
    }

    onAddAgent(form: NgForm){
        const name      = form.value["name"]
        const firstname = form.value["firstname"]
        const mail      = form.value["mail"]
        const phone     = form.value["phone"]
        this.userService.getAgentData().then(
            (agentList: any[]) => {
                this.id = agentList[(agentList.length -1)].matricule + 1;
                this.id = this.id.toString();

                this.userService.addAgent(name, firstname, phone, mail, this.id).then(
                    () => {
                        this.presentToast("Nouvel agent crée", "success");
                        this.dismissModal();
                    }
                )

            }
        )
        

        ;
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
