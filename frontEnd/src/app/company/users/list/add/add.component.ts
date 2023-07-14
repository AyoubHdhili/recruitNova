import { Component, Input} from '@angular/core';
import { User } from '../../../../shared/model/user.model';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  user: User = new User();
  occupations=['human-ressources-employee','human-ressources-manager'];
  companyId:string | null=localStorage.getItem("CompanyId");
  constructor(private authservice: AuthService,
    private http:HttpClient,
    private dialog: MatDialog, private userService:UserService){
  }
  onSubmit(){
    this.user.companyName=localStorage.getItem('companyName') || '';
    this.user.companyId=this.companyId || '';
    console.log(this.user);
    
    this.authservice.createHR(this.user).subscribe((res)=>{
      console.log(this.user)
    })
    this.userService.getUsers(this.companyId).subscribe((res)=>{
      return this.userService.changeUsers(res);
    });
    this.closeDialog();

    //window.location.reload();
  }
  closeDialog(){
    this.dialog.closeAll();
  }

  newUsers() {
    this.userService.getUsers(this.companyId).subscribe((res)=>{
      return this.userService.changeUsers(res);
    });
  }
}
