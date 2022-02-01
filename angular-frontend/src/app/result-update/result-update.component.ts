import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from '../education';
import { EducationServiceService } from '../education-service.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-result-update',
  templateUrl: './result-update.component.html',
  styleUrls: ['./result-update.component.css']
})
export class ResultUpdateComponent implements OnInit {

  constructor(private route:Router,private eduservice : EducationServiceService,private share: ShareService ) { }
  username:string;
  education : Education = new Education();
  edulist:Education[];
  ngOnInit(): void {
    //alert("oninit")
    this.eduservice.getEducationList().subscribe(data=>{
      this.edulist=data;
      for(let i=0;i<this.edulist.length;i++){
        if(this.edulist[i].username==this.share.uname &&this.share.uname!=null){
          this.education=this.edulist[i];
          break
        }
      }
      //alert(JSON.stringify(this.education))
    })
  }
  child_msg=["Logout"]
  onsubmit(){
    if(this.share.uname!=null){
    this.saveEducation();
    }
    else{
      alert("You need to login first.")
      this.route.navigate(['Login'])
    }
  }
  
  saveEducation(){
    //alert(JSON.stringify(this.education))
    this.education.username=this.share.uname
    this.eduservice.createEducation(this.education).subscribe( data =>{
      //alert(JSON.stringify(data))
      this.route.navigate(['Result Details'])
    },
    error => console.log(error));
  }
}
