import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
    private addUserForm: FormGroup;
    constructor(private formBuilder: FormBuilder,
                private userService: UserService,
                private router: Router,
                private alertController: AlertController,
                private toastController: ToastController) { }

    ngOnInit() {
        this.initForm();
    }

    initForm(){
        this.addUserForm = this.formBuilder.group({
            name: ['', Validators.required],
            firstname: ['', Validators.required],
            mail: ['', Validators.required],
            phone: ['', Validators.required]
        });
    }

    addUser(){
        let name      = this.addUserForm.get("name").value;
        let firstname = this.addUserForm.get("firstname").value;
        let mail      = this.addUserForm.get("mail").value;
        let phone     = this.addUserForm.get("phone").value;     
           
        this.userService.createNewUser(name, firstname, mail, phone);
        this.presentToast("Votre compte a été crée", "success");

        this.router.navigate(['/home']);
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

    // async presentAlert() {
    //     const alert = await this.alertController.create({
    //       cssClass: 'my-custom-class',
    //       header: 'Alert',
    //       subHeader: 'Subtitle',
    //       message: 'Votre compte a été crée.',
    //       buttons: ['OK']
    //     });
    
    //     await alert.present();
    // }


}
