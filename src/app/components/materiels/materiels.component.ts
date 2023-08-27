import { Component } from '@angular/core';

@Component({
  selector: 'app-materiels',
  templateUrl: './materiels.component.html',
  styleUrls: ['./materiels.component.css']
})
export class MaterielsComponent {

  public FormSubjet: boolean = false;
  // showFormSubjet

  public showFormSubjet(){
    this.FormSubjet = true
  }
  public closeFormSubjet(){
    this.FormSubjet = false
  }


  public subjects:any[] =[
    {
      id:1,
      nom: "francais",
      type: "langue",
      libelle: "maitrice de la langue",
      coefficient: "5",
    },

    {
      id:2,
      nom: "francais",
      type: "langue",
      libelle: "maitrice de la langue",
      coefficient: "5",
    },

    {
      id:3,
      nom: "francais",
      type: "langue",
      libelle: "maitrice de la langue",
      coefficient: "5",
    }


  ]

}
