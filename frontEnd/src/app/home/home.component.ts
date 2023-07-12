import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { HumanRessourcesComponent } from '../human-ressources/human-ressources.component';
import { UserService } from '../shared/service/user.service';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
