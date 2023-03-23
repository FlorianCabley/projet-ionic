import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage implements OnInit {
  modif: boolean = false;
  constructor(
    private alertCtrl : AlertController
  ) { }

  ngOnInit() {
  }

  async setModif(){
    if(!this.modif){
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sûr de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => (this.modif = !this.modif)
          }
        ]
      });

      await alert.present(); 
    }else{
      this.modif = !this.modif;
    }
  }
}
