import { Component, OnInit } from '@angular/core';

import { CandidatService } from '../shared/candidat.service';
import{ NgForm} from '@angular/forms';
import { Candidat } from '../shared/candidat.model';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss'],
  providers: [CandidatService],
})
export class CandidatComponent implements OnInit {

   candidat :  Candidat = new Candidat();
   candidats : Candidat[] = [];
  constructor(private candidatService: CandidatService) {}

  ngOnInit() {
    // Place any initialization logic or function calls here
    this.resetForm();
    this.readCandidats();

  
  }
  resetForm(form?: NgForm){
    form?.reset();
  }
  onSubmit(){
    this.candidatService.postCandidat(this.candidat).subscribe((candidat)=>{
       console.log(candidat);
       this.readCandidats();
       this.resetForm();
    })
  }
  readCandidats(){
    
    this.candidatService.getCandidats().subscribe((res)=>{
      this.candidats = res as Candidat[];
      console.log(res as Candidat[]);
      
    });
  }
  onEdit(candidat : Candidat){
    this.candidat = candidat;
  }
  Update(){
    this.candidatService.updateCandidate(this.candidat).subscribe((candidat)=>{
      console.log(candidat);
      this.readCandidats();
   })
  }
  onDelete(id: any){
    if(confirm('Est ce que vous etes sure de suppeimer ce candidat ?') == true){
      this.candidatService.deleteCandidate(id).subscribe(()=>{
        this.readCandidats();
      });
    }
  }
}
