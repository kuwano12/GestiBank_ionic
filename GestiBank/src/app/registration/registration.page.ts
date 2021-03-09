import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
                private router: Router) { }

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
        this.router.navigate(['/home']);
    }

}
