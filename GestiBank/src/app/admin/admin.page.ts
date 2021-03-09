import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddAgentModalComponent } from '../add-agent-modal/add-agent-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

    constructor(private router: Router, private modalController: ModalController) { }

    ngOnInit() {
    }

    signOut(){
        this.router.navigate(['/home']);
    }
    
    async presentAddModal(){
        const modal = await this.modalController.create({
            component: AddAgentModalComponent,
            cssClass: 'my-custom-class',
          });
        //   modal.onDidDismiss().then(
        //       () => {
        //           this.refresh();
        //       }
        //   )
          return await modal.present();
    }

}
