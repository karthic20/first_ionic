import { Component, OnInit } from '@angular/core';
import {ToastController,NavController} from '@ionic/angular';
@Component({
  selector: 'app-signup1',
  templateUrl: './signup1.page.html',
  styleUrls: ['./signup1.page.scss'],
})
export class Signup1Page implements OnInit {
  username: string ="";
  password: string ="";
  mobile: string ="";
  cpassword: string ="";
  constructor(public toastCtrl:ToastController,public navCtrl:NavController) { }
  async register(){
    if(this.username==""){
      const toast =await this.toastCtrl.create({
        message: "Username cant be empty",
        duration: 3000
      });
      toast.present();
    }else if(this.mobile==""){
      const toast =await this.toastCtrl.create({
        message: "Mobile No. cant be empty",
        duration: 3000
      });
      toast.present();
    }else if(this.password==""){
      const toast =await this.toastCtrl.create({
        message: "Password cant be empty",
        duration: 3000
      });
      toast.present();
    }else if(this.cpassword==""){
      const toast =await this.toastCtrl.create({
        message: " Confirm Password field cant be empty",
        duration: 3000
      });
      toast.present();
    }else{
      this.navCtrl.navigateForward('/login');
    }
  }
  ngOnInit() {
  }

}
