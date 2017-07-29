import { Component  , Injectable , OnInit , OnChanges} from '@angular/core';
import {Http, Response} from '@angular/http';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import {SelectItem } from 'primeng/primeng';
import {commonAPIservice  } from '../../providers/commonServices';
import {Employee } from '../../providers/commonServices';

 

@Component({
  selector: 'APM-app',
  templateUrl: './APM.html'
})

export class APMComponent   implements OnInit{
  rForm: FormGroup;
  PRList:any;
  continuosCodeReview:any;
  frequency: FormControl;
  TeamReviewpeerReview: FormControl;
  GDCReview: FormControl;
  EnableReview: FormControl;
  ReviewComentTracking: FormControl;
  Automation: FormControl;
  ReviewTaskTracking: FormControl;
  ReviewCriteria: FormControl;
  ReviewPlanTracking: FormControl;
  applicable: FormControl;
  applicable2: FormControl;
  


 constructor( private _fb: FormBuilder , private commonAPIservice: commonAPIservice , private http: Http) {

  this.frequency            = new FormControl('', Validators.compose([Validators.required]));
  this.TeamReviewpeerReview = new FormControl('', Validators.compose([Validators.required]));
  this.GDCReview            = new FormControl('', Validators.compose([Validators.required]));
  this.EnableReview         = new FormControl('', Validators.compose([Validators.required]));
  this.ReviewComentTracking = new FormControl('', Validators.compose([Validators.required]));
  this.Automation           = new FormControl('', Validators.compose([Validators.required]));
  this.ReviewTaskTracking   = new FormControl('', Validators.compose([Validators.required]));
  this.ReviewCriteria       = new FormControl('', Validators.compose([Validators.required]));
  this.ReviewPlanTracking   = new FormControl('', Validators.compose([Validators.required]));
  this.applicable           = new FormControl('', Validators.compose([Validators.required]));
  this.applicable2          = new FormControl('', Validators.compose([Validators.required]));
  





  this.rForm = this._fb.group({
          "continuosCodeReview" : this._fb.group({
              'frequency'           : this.frequency,
              'TeamReviewpeerReview': this.TeamReviewpeerReview,
              'GDCReview'           : this.GDCReview,
              'EnableReview'        : this.EnableReview,
              'ReviewComentTracking': this.ReviewComentTracking,
              'Automation'          : this.Automation,
              'applicable'          : this.applicable
          }),
          "peerReviewPlan"      : this._fb.group({
              'ReviewTaskTracking'  : this.ReviewTaskTracking,
              'ReviewCriteria'      : this.ReviewCriteria,
              'ReviewPlanTracking'  : this.ReviewPlanTracking,
              'applicable'          : this.applicable

          })
  });
    
 }




  ngOnInit() { 
    this.commonAPIservice.getSqa('/v-ptd/loadPtd?projectId=1&auditVersion=1').subscribe(  (res) => {
      this.PRList = res.entity ; 
    });
  }

  onSubmit(){
    this.commonAPIservice.update('/v-ptd/merge?userId=1&projectId=1&version=1' , this.PRList).subscribe(
      (res) => {
        alert('updated Sucessfully');
    });
  }

  chk(event){
    console.log(event)
   
  }



}

