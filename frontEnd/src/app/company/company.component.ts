import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { HumanRessourcesComponent } from '../human-ressources/human-ressources.component';
import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/user.model';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit{
  
  name!:string | null ;
  role!:string |null;
  showFiller = false;
  HRs:User[]=[];
  constructor(public dialog: MatDialog, private userService:UserService){

  }

  ngOnInit(): void {
    this.name=localStorage.getItem("companyName");
    this.role=localStorage.getItem("role");
    this.getusers();
  }
  openDialog(): void{
    this.dialog.open(HumanRessourcesComponent,{
      height: '400px',
      width: '700px'
  });
    console.log('in the open');
    
  }
  getusers(){
    this.userService.getUsers().subscribe((res)=>{
      this.HRs=res as User[];
      console.log(this.HRs[0]);
    });
  }

}
