import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/model/user.model';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
  name!:string | null ;
  role!:string |null;
  showFiller = false;
  usersList:User[]=[];
  companyId:string | null=localStorage.getItem("CompanyId");
  constructor(public dialog: MatDialog, private userService:UserService){
    this.userService.currentUser.subscribe((res : any)=>{
      
      this.usersList=res;

    });
  }



  
  ngOnInit(): void {
    this.name=localStorage.getItem("companyName");
    this.role=localStorage.getItem("role");
    this.getUsers(this.companyId);
    this.userService.currentUser.subscribe((res : any)=>{
      this.usersList=res;
    });
  }
  openDialog(): void{
    this.dialog.open(AddComponent,{
      height: '400px',
      width: '700px'
  });
    console.log('in the open');
    
  }
  getUsers(companyId: any){
    this.userService.getUsers(companyId).subscribe((res)=>{
      this.usersList=res as User[];
      console.log(this.usersList);
    });
    
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(()=>{
      this.ngOnInit();
    })
  }
}
