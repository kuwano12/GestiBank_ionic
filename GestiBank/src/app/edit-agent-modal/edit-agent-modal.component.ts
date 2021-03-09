import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-agent-modal',
  templateUrl: './edit-agent-modal.component.html',
  styleUrls: ['./edit-agent-modal.component.scss'],
})
export class EditAgentModalComponent{
    @Input() account: any;

    constructor(private modalController: ModalController,
                private userService: UserService,
                private toastController: ToastController) { }


    dismissModal(){
        this.modalController.dismiss();
    }
    onEditAgent(form: NgForm){
        const name      = form.value["name"]
        const firstname = form.value["firstname"]
        const mail      = form.value["mail"]
        const activated = form.value["activated"]
        const matricule = form.value["matricule"]
        const password  = form.value["password"]
        
        this.userService.editAgent(name, firstname, mail, activated, matricule, password).then(
            () => {
                this.presentToast("Agent mis à jour", "success");
                this.dismissModal();
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
