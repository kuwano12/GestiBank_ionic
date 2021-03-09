import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userSubject = new Subject<any>();
    private user: User;
    private agentList: any ="";
    BASE_URL = "http://192.168.1.16:85";

    constructor(private httpClient: HttpClient, 
                private router: Router) { }

    getAgentData(){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.get(this.BASE_URL + "/user/AGENT").toPromise().then(
                    (data) => {
                        this.agentList = resolve(data.valueOf());
                    }
                )
            }
        )
        // return this.httpClient.get<any>(this.BASE_URL + "/user/AGENT").subscribe(
        //     (response) => {
        //         this.agentList = response;
        //         this.emitAgentList();
        //     }
        // )
    }
  
    createNewUser(name: string, firstname: string, mail: string, phone: string){
       this.user = {
           name: name,
           firstname: firstname,
           mail: firstname,
           phone: phone,
           activated: "w",
           role: "CLIENT",
           matricule: "",
           password: ""
       }
        this.httpClient.post(this.BASE_URL + "/user", this.user).subscribe(
            () => {
                console.log("Client ajouté");
            },
            () => {
                console.log("Erreur d'inscription");
            }
        );
    }

    signInUser(mail: string, password: string){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.post(this.BASE_URL + "/login/" + mail + "/" + password, "").toPromise().then(
                    (data) => {
                        resolve(data.valueOf());
                    }, 
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    getListAgent(){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.get(this.BASE_URL + "/user/AGENT").toPromise().then(
                    (data) => {
                        resolve(data.valueOf());
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }

    getAgentByMail(matricule: string){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.get(this.BASE_URL + "/user/agent/" + matricule ).toPromise().then(
                    (data) => {
                        resolve(data.valueOf());                        
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        )
    }

    deleteAgent(mail: string, matr: string){
        return new Promise(
            (resolve, reject) => {
                this.httpClient.delete(this.BASE_URL + "/user/agent/" + mail + "/" + matr).toPromise().then(
                    () => {
                        resolve(true);
                    },
                    (error) => {
                        reject(error);
                    }
                );
            }
        );
    }
    editAgent(name: string, firstname: string, mail: string, activated: string, matricule: string, password: string){
        const agentObject = {
            name: name,
            firstname: firstname,
            mail: mail,
            matricule: matricule,
            activated: activated,
            password: password,
            role: "AGENT"
        }
        return new Promise(
            (resolve, reject) => {
                this.httpClient.put(this.BASE_URL + "/user/agent/" + mail, agentObject).toPromise().then(
                   () => {
                       resolve(true);
                   },
                   (error) => {
                       reject(error);
                   }
                );
            }
        );
    }

    addAgent(name: string, firstname: string, phone: string, mail: string, matricule: string){

        const password = Math.random().toString(36).slice(-8);
        const agentObject = {
            name: name,
            firstname: firstname,
            phone: phone,
            mail: mail,
            matricule: matricule,
            activated: "t",
            password: password,
            role: "AGENT"
        }
        
        
        return new Promise(
            (resolve, reject) => {
                this.httpClient.post(this.BASE_URL + "/user", agentObject).toPromise().then(
                    () => {
                        resolve(true);
                    },
                    (error) => {
                        reject(error);
                    }
                )
            }
        );
    }

    emitAgentList(){
        this.userSubject.next(this.agentList.slice());
    }
}
