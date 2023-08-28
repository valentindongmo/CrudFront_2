import { Component } from '@angular/core';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent {
  public FormSubjet: boolean = false;
  // showFormSubjet

  // public showFormSubjet(){
  //   this.FormSubjet = true
  // }
  public closeFormSubjet(){
    this.FormSubjet = false
  }
}
