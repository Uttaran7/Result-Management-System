import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../education';
import { EducationServiceService } from '../education-service.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  id: number
  edulist: Education[];

  constructor(private route:ActivatedRoute,private eduservice:EducationServiceService,private router: Router,private share:ShareService) { }

  education :Education=new Education();
  child_msg=["Personal Details","Educational Details","Logout"]
  ngOnInit(): void {
    this.eduservice.getEducationList().subscribe(data=>{
      this.edulist=data;
      // for(let i=0;i<this.edulist.length;i++){
      //   if(this.edulist[i].username==this.share.uname && this.share.uname!=null){
      //     this.education=this.edulist[i];
      //     break
      //   }
      // }
      //alert(JSON.stringify(this.education))
    })
    
  }
  updateEmployee(id: number){
    if(this.share.uname!=null){
      this.router.navigate(['/Education Details/Edit', id]);
    }else{
      alert("You need to login first.")
      this.router.navigate(['Login'])
    }
  }
  

//   updateEmployee(){
    
//     this.route.navigate(['Education Details/Edit']);
//   }
}
