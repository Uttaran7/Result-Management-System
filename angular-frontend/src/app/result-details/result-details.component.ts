import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../education';
import { EducationServiceService } from '../education-service.service';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  edulist: Education[];

  constructor(private route:Router,private eduservice:EducationServiceService,private share:ShareService) { }

  education :Education=new Education();
  child_msg=["Student Details","Result Details","Logout"]
  ngOnInit(): void {
    this.eduservice.getEducationList().subscribe(data=>{
      this.edulist=data;
      for(let i=0;i<this.edulist.length;i++){
        if(this.edulist[i].username==this.share.uname && this.share.uname!=null){
          this.education=this.edulist[i];
          break
        }
      }
      //alert(JSON.stringify(this.education))
    })
    
  }

  updateEmployee(){
    
    this.route.navigate(['Result Details/Update']);
    console.log("2222");
  }

}
