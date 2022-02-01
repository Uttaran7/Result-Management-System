import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../education';
import {EducationServiceService} from '../education-service.service';
import { ShareService } from '../share.service';
@Component({
  selector: 'app-education-update',
  templateUrl: './education-update.component.html',
  styleUrls: ['./education-update.component.css']
})
export class EducationUpdateComponent implements OnInit {

  id :number;
  username:string;
  education : Education = new Education();
  edulist:Education[];
  constructor(private router:Router,private route: ActivatedRoute,private eduservice : EducationServiceService,private share: ShareService ) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //alert("oninit")
    this.eduservice.getEducationById(this.id).subscribe(data=>{
      this.education=data;
      // for(let i=0;i<this.edulist.length;i++){
      //   if(this.edulist[i].username==this.share.uname &&this.share.uname!=null){
      //     this.education=this.edulist[i];
      //     break
      //   }
      // }
      //alert(JSON.stringify(this.education))
    })
  }
  child_msg=["Logout"]
  onsubmit(){
    this.eduservice.createEducation(this.education).subscribe(data=>{
      this.goToEmployeeList();
    },error => console.log(error))
  }
  parent_msg:any=["Educational Details",this.education.id]
  
  // saveEducation(){
  //   //alert(JSON.stringify(this.education))
  //   this.education.username=this.share.uname
  //   this.eduservice.createEducation(this.education).subscribe( data =>{
  //     //alert(JSON.stringify(data))
  //     this.router.navigate(['Educational Details'])
  //   },
  //   error => console.log(error));
  // }
 
  goToEmployeeList(){
    this.router.navigate(['/Educational Details']);
  }
}
