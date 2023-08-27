import { Component } from '@angular/core';

@Component({
  selector: 'app-contain',
  templateUrl: './contain.component.html',
  styleUrls: ['./contain.component.css']
})
export class ContainComponent {
  public showHead: boolean = true;
  public users:any[] = [
    {
      id:1,
      name: "pacom",
      email: "pacom@gmail.com",
      pseudo: "Pacom"
    },
    {
      id:2,
      name: "pacom",
      email: "pacom@gmail.com",
      pseudo: "Pacom"
    },
    {
      id:3,
      name: "pacom",
      email: "pacom@gmail.com",
      pseudo: "Pacom"
    },
    {
      id:4,
      name: "pacom",
      email: "pacom@gmail.com",
      pseudo: "Pacom"
    }
  ]
}
