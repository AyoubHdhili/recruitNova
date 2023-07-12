import { Component } from '@angular/core';
import { User } from '../shared/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-human-ressources',
  templateUrl: './human-ressources.component.html',
  styleUrls: ['./human-ressources.component.scss']
})
export class HumanRessourcesComponent {
  user: User = new User();
  occupations=['human-ressources-employee','human-ressources-manager']
  constructor(private authservice: AuthService,
    private http:HttpClient,
    private dialog: MatDialog){
  }
  onSubmit(){
    this.user.companyName=localStorage.getItem('companyName') || '';
    
    this.authservice.createHR(this.user).subscribe((res)=>{
      console.log(this.user)
    })
    this.closeDialog();

    //window.location.reload();
  }
  closeDialog(){
    this.dialog.closeAll();
  }
}
