import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    private loginForm: FormGroup;
    errorMessage: string;
    private user: User;
    
    constructor(private userService: UserService, 
                private formBuilder: FormBuilder,
                private toastController: ToastController,
                private router: Router) { }
    
    ngOnInit() {
        this.initForm();
    }
    
    initForm(){
        this.loginForm = this.formBuilder.group({
            mail: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    onLogin(){
        const mail = this.loginForm.get("mail").value;
        const password = this.loginForm.get("password").value;
        this.userService.signInUser(mail, password).then(
            (user: User) => {
                if(user){
                    this.user = user;                
                    this.presentToast( "Bienvenue " + this.user["firstname"],"success");
                    if(user["role"] == "ADMIN"){
                        this.router.navigate(['/admin']);
                    }else if(user["role"] == "AGENT"){
                        this.router.navigate(['/agent/' + this.user.matricule]);
                    }else if(user["role"] == "CLIENT" ){
                        if(user["activated"] == "t"){
                            this.router.navigate(['/client/' + this.user.mail]);
                        }else{
                            this.presentToast("Compte non actif", "danger");
                        } 
                    }
                }else{
                    this.presentToast("Identifiants incorrects", "danger");
                }
            },
            (error) => {
                this.errorMessage = error;
                console.log(this.errorMessage);
                
                this.presentToast("Identifiants incorrects", "danger");
            }
        )

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
