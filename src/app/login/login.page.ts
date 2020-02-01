import { Component, OnInit } from '@angular/core';
import {NavController,ToastController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string ="";
  password: string ="";

  constructor(public toastCtrl:ToastController,public navCtrl:NavController) { }
  async signin(){
    if(this.username==""){
      const toast =await this.toastCtrl.create({
        message: "Username cant be empty",
        duration: 3000
      });
      toast.present()
    }else if(this.password==""){
      const toast =await this.toastCtrl.create({
        message: "Password cant be empty",
        duration: 3000
      });
      toast.present();
    }else{
      this.navCtrl.navigateForward('/dashboard');
    }
  }
  ngOnInit() {
  }  
}
