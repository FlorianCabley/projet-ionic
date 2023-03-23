import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeux-list',
  templateUrl: './jeux-list.page.html',
  styleUrls: ['./jeux-list.page.scss'],
})
export class JeuxListPage implements OnInit {
  jeux = [
    {
      id: 1,
      title: 'Counter strike: Source 2',
      img: '/assets/icon/csgo2.jpg',
      editeur: 'Valve',
      description: 'Nouveau Counter Strike: Global avec le moteur Source 2 actuellement en BETA TEST en jouant à csgo et le jeu sera dispo été 2023'
    },
    {
      id: 2,
      title: 'Fortnite',
      img: '/assets/icon/fortnite.jpg',
      editeur: 'Epic Game',
      description: 'Battle royal où il y a 100 joueurs mais un seul gagnant à la fin'
    },
    {
      id: 3,
      title: 'Genshin Impact',
      img: '/assets/icon/genshinimpact.webp',
      editeur: 'MiHoYo',
      description: 'Découvrer le monde merveilleux de Genhin Impact'
    }
  ]
  constructor() {}

  ngOnInit() {
  }

}
