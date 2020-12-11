import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { CollegeModel } from 'src/app/models/college.model';
import { DepartmentModel } from 'src/app/models/department.model';
import { ExperienceModel } from 'src/app/models/experience.model';
import { DegreeModel } from 'src/app/models/degree.model';
import { FunctionalAreaModel } from 'src/app/models/functional-area.model';
import { SkillInfoModel } from 'src/app/models/skill-info.model';
import { SalaryInfoModel } from 'src/app/models/salary-info.model';
import { JobSeekerModel } from 'src/app/models/job-seeker.model';
import { IMultiSelectSettings } from 'ng2-multiselect';


import videojs from 'video.js';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as RecordRTC from 'recordrtc';
import * as Record from 'videojs-record/dist/videojs.record.js';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile-register',
	templateUrl: './profile-register.component.html',
	styleUrls: ['./profile-register.component.css']
})
export class ProfileRegisterComponent implements OnInit {

	isLinear = false;
	createJobSeekerCard: FormGroup;
	videoResume: FormGroup;
	uploadResume: FormGroup;
	verification: FormGroup;
	chatWithRecruiter: FormGroup;

	states:any[]

collegesList:CollegeModel[]=[];
departmentsList:DepartmentModel[]=[];
degreeList:DegreeModel[]=[];
functaionAreaList:FunctionalAreaModel[]=[];
skillList:SkillInfoModel[]=[];
experienceList:ExperienceModel[]=[];
salaryRangesList:SalaryInfoModel[]=[];



// disabled = false;
// ShowFilter = false;
// limitSelection = false;
// funcationAreaDropDownList:FuncationAreaDropDown[]=[]
// selectedItems: any = [];
// dropdownSettings: any = {};


selectedItems = [];
// dropdownSettings : IMultiSelectSettings={};
funcationAreaList = new Array();
funcationArea = "";

MultSelect : any= {};
selectedAreas :any =[];
MultSelectSkill : any= {};
	ids :any =[];
	constructor(private _formBuilder: FormBuilder,private router:Router,private jobSeekerService:JobSeekerService,elementRef: ElementRef,private uploadService:FileUploadService) { 


		this.player = false;

		// save reference to plugin (so it initializes)
		this.plugin = Record;
	
		// video.js configuration
		this.config = {
		  controls: true,
		  autoplay: false,
		  fluid: false,
		  loop: false,
		  width: 320,
		  height: 240,
		  bigPlayButton: false,
		  type: 'video/mp4',
		  controlBar: {
			volumePanel: false
		  },
		  plugins: {
			/*
			// wavesurfer section is only needed when recording audio-only
			wavesurfer: {
				backend: 'WebAudio',
				waveColor: '#36393b',
				progressColor: 'black',
				debug: true,
				cursorWidth: 1,
				displayMilliseconds: true,
				hideScrollbar: true,
				plugins: [
					// enable microphone plugin
					WaveSurfer.microphone.create({
						bufferSize: 4096,
						numberOfInputChannels: 1,
						numberOfOutputChannels: 1,
						constraints: {
							video: false,
							audio: true
						}
					})
				]
			},
			*/
			// configure videojs-record plugin
			record: {
			  audio: true,
			  video: true,
			  debug: true
			}
		  }
		};
	}
	
	ngOnInit() {
		this.MultSelect = { singleSelection: false, idField: 'id', textField: 'functionalArea', selectAllText: 'Select All',unSelectAllText: 'UnSelect All', itemsShowLimit: 5, allowSearchFilter: true};
		this.MultSelectSkill = { singleSelection: false, idField: 'id', textField: 'skill', selectAllText: 'Select All',unSelectAllText: 'UnSelect All', itemsShowLimit: 5, allowSearchFilter: true};
		this.selectedAreas = []
		this.createForm();
		this.getAllSararyRanges();
		this.getAllColleges();
		this.getAllDegree();
		// this.getAllDepartments();
		this.getAllExprience();
	
		this.getAllFuncationalArea();
		// this.getAllSkills();

		this.states = [
			{
				name : 'MH'
			},{
				name : 'GJ'
			},
			{
				name : 'KR'
			}
		]

		
	
	// this.configDropDownSetting();
	}
	// id:number;
	// functionalArea:string;
configDropDownSetting(){
	// this.dropdownSettings = {
	// 	singleSelection: false,
	// 	text: "Select Health History",
	// 	selectAllText: 'Select All',
	// 	unSelectAllText: 'UnSelect All',
	// 	enableSearchFilter: true,
	// 	// classes:"myclass custom-class"
	//   };

}



//get all 
	getAllColleges(){
		this.jobSeekerService.getAllColleges().subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.collegesList=res.data;
		}else{
			alert(res.msg)
		}
		
		},err=>{
		  
		});
		}
 getAllDepartments(id){


	this.jobSeekerService.getAllDepartments(id).subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.departmentsList=res.data;
		}else{
			alert(res.msg)
		}
		
		},err=>{
		  
		});
 }
getAllDegree(){
	this.jobSeekerService.getAllDegrees().subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.degreeList=res.data;
		}else{
			alert(res.msg)
		}
		
		},err=>{
		  
		});
}
getAllFuncationalArea(){
	this.jobSeekerService.getAllFunctionalAreas().subscribe(res=>{
		console.log(res);
		if(res.status==200){

			this.configDropDownSetting();
	this.functaionAreaList=res.data;
			// this.functaionAreaList.forEach(element=>{
			// 	this.funcationAreaList.push({'id':element.id,'itemName':element.functionalArea});
			// })
		
			// this.funcationAreaList = []
			// this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
			// this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
			// this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
			// this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
			// this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
			// this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
			// this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
			// this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});
			
			console.log("Area Lists"+this.functaionAreaList);
		}else{
			alert(res.msg)
		}
		
		},err=>{
			// this.funcationAreaList = []
			// this.funcationAreaList.push({'id':1,'functionalArea':'functionalArea1'});
			// this.funcationAreaList.push({'id':2,'functionalArea':'functionalArea2'});
			// this.funcationAreaList.push({'id':3,'functionalArea':'functionalArea3'});
			// this.funcationAreaList.push({'id':4,'functionalArea':'functionalArea4'});
			// this.funcationAreaList.push({'id':5,'functionalArea':'functionalArea1'});
			// this.funcationAreaList.push({'id':6,'functionalArea':'functionalArea2'});
			// this.funcationAreaList.push({'id':7,'functionalArea':'functionalArea3'});
			// this.funcationAreaList.push({'id':8,'functionalArea':'functionalArea4'});

			
			// console.log("Area Lists"+this.funcationAreaList);
		});
}
getAllSkills(ids){
	debugger
	this.jobSeekerService.getAllSkills(ids).subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.skillList=res.data;
			// this.skillList = []
			// this.skillList.push({'id':1,'skill':'skill1',functionalAreaId:1});
			// this.skillList.push({'id':2,'skill':'skill2',functionalAreaId:1});
			// this.skillList.push({'id':3,'skill':'skill3',functionalAreaId:1});
			// this.skillList.push({'id':4,'skill':'skill4',functionalAreaId:1});
			// this.skillList.push({'id':5,'skill':'skill1',functionalAreaId:1});
			// this.skillList.push({'id':6,'skill':'skill2',functionalAreaId:1});
			// this.skillList.push({'id':7,'skill':'skill3',functionalAreaId:1});
			// this.skillList.push({'id':8,'skill':'skill4',functionalAreaId:1});
			
			console.log("Skill Lists"+this.skillList);
		}else{
			alert(res.msg)
		}
		
		},err=>{
			// this.skillList = []
			// this.skillList.push({'id':1,'skill':'skill1',functionalAreaId:1});
			// this.skillList.push({'id':2,'skill':'skill2',functionalAreaId:1});
			// this.skillList.push({'id':3,'skill':'skill3',functionalAreaId:1});
			// this.skillList.push({'id':4,'skill':'skill4',functionalAreaId:1});
			// this.skillList.push({'id':5,'skill':'skill1',functionalAreaId:1});
			// this.skillList.push({'id':6,'skill':'skill2',functionalAreaId:1});
			// this.skillList.push({'id':7,'skill':'skill3',functionalAreaId:1});
			// this.skillList.push({'id':8,'skill':'skill4',functionalAreaId:1});
			
			// console.log("Skill Lists"+this.skillList);
		});
}
getAllExprience(){
	this.jobSeekerService.getAllExperience().subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.experienceList=res.data;
		}else{
			alert(res.msg)
		}
		
		},err=>{
		  
		});
}
getAllSararyRanges(){
	this.jobSeekerService.getAllSalaryRanges().subscribe(res=>{
		console.log(res);
		if(res.status==200){
			this.salaryRangesList=res.data;
		}else{
			alert(res.msg)
		}
		
		},err=>{
		  
		});
}







// ngOnInit() {
	// this.cities = [
	// 	{ item_id: 1, item_text: 'New Delhi' },
	// 	{ item_id: 2, item_text: 'Mumbai' },
	// 	{ item_id: 3, item_text: 'Bangalore' },
	// 	{ item_id: 4, item_text: 'Pune' },
	// 	{ item_id: 5, item_text: 'Chennai' },
	// 	{ item_id: 6, item_text: 'Navsari' }
	// ];
	// this.selectedItems = [{ item_id: 4, item_text: 'Pune' }, { item_id: 6, item_text: 'Navsari' }];
	
	



	onItemSelect(item: any) {
		//debugger
		console.log(item);
		this.ids.push(item.id)
		this.getAllSkills(this.ids);
		
	  }

	  onSelectAll(items: any) {
		console.log(items);
		items.map(item=>{
		this.ids.push(item.id)
		})		
		this.getAllSkills(this.ids);
	  }

	  onItemDeSelect(item: any) {
		  debugger
		console.log(item);

		this.ids.map(id=>{
			if(id == item.id){
				const index = this.ids.findIndex(id =>id === item.id);
				this.ids.splice(index, 1);
			}
			
			})		
			this.getAllSkills(this.ids);
	
	  }
	 
	  onDeSelectAll(items: any) {
		console.log(items);
		this.ids = items
		this.ids = []

}


	  onItemSelectSkill(item: any) {
		console.log(item);
		
	  }
	 






createForm(){

	this.createJobSeekerCard = this._formBuilder.group({
		fullName: ['', Validators.required],
		profileHeadline: ['', Validators.required],
		college: ['', Validators.required],
		
		companyName: ['', Validators.required],
		department: ['', ],
		//Validators.required
		degree: ['', Validators.required],
		experience: ['', Validators.required],
		functionalArea: [[], Validators.required],
		expected_salary: ['', Validators.required],
		// skill1: ['', Validators.required],
		// skill2: ['', Validators.required],
		// skill3: ['', Validators.required],
		// skill4: ['', Validators.required]
		skills: [[], Validators.required]
	});
	// this.createJobSeekerCard = new FormGroup({
	// 	fullName: new FormControl(''),
	// 	profileHeadline: new FormControl(''),
	// 	college: new FormControl(''),
		
	// 	companyName: new FormControl(''),
	// 	department: new FormControl(''),
	// 	//Validators.required
	// 	degree: new FormControl(''),
	// 	experience: new FormControl(''),
	// 	functionalArea: new FormControl([]),
	// 	expected_salary: new FormControl([]),
	// 	// skill1: ['', Validators.required],
	// 	// skill2: ['', Validators.required],
	// 	// skill3: ['', Validators.required],
	// 	// skill4: ['', Validators.required]
	// 	skills: new FormControl([]),
	// });

	this.videoResume = this._formBuilder.group({
		uploadVideo: ['', Validators.required]
	});
	this.uploadResume = this._formBuilder.group({
		uploadResume: ['', Validators.required]
	});
	this.verification = this._formBuilder.group({
		selectDocumentType: ['', Validators.required],
		uploadDocument: ['', Validators.required]
	});

	this.createJobSeekerCard.patchValue({college : 'Select College'});
}

onChangeDegreeCombox(event, degreeName){
	let obj = this.degreeList.find(x => x.degreeName === degreeName);
	this.getAllDepartments(obj.id);
}
onChangeFunctionaAreaCombox(id){
this.getAllSkills(id);
}

onChangeDepartmentCombox(department){

}



prepareJobSeeker(): JobSeekerModel{
	
		const controls = this.createJobSeekerCard.controls;
		const _jobSeeker = new JobSeekerModel();

		_jobSeeker.fullName=controls.fullName.value;
		_jobSeeker.profileHeadline=controls.profileHeadline.value;
		_jobSeeker.experience=controls.experience.value;
		_jobSeeker.expected_salary=controls.expected_salary.value;
		_jobSeeker.department=controls.department.value;
		_jobSeeker.degree=controls.degree.value;
		_jobSeeker.companyName=controls.companyName.value;
		_jobSeeker.college=controls.college.value;
		var username = localStorage.getItem('macrax-emailId')
		_jobSeeker.userName = username

	
	
var funcationArea:string[]=[];
var skill:string[]=[];
//funcationArea= controls.functionalArea.value.join('');
// skill.push(controls.skills1.value);
// skill.push(controls.skills2.value);
// skill.push(controls.skills3.value);
// skill.push(controls.skills4.value);
var f:string[] = [];
//f[0] = funcationArea

controls.functionalArea.value.forEach(element => {
	funcationArea.push(element['functionalArea'])
});

controls.skills.value.forEach(element => {
	skill.push(element['skill']);
});

_jobSeeker.functionalArea=funcationArea;
_jobSeeker.vedioUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
_jobSeeker.docUrl ='https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
_jobSeeker.verificationCardId='2'
_jobSeeker.verificationCardUrl='https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
_jobSeeker.profileUrl='https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'

_jobSeeker.skills=skill;



		return _jobSeeker
}
onSave(){


	// this.hasFormErrors = false;
	const controls = this.createJobSeekerCard.controls;
console.log(this.createJobSeekerCard);
	/** check form */
	if (this.createJobSeekerCard.invalid) {
		Object.keys(controls).forEach(controlName =>
			controls[controlName].markAsTouched()
		);

		// this.hasFormErrors = true;
		;
	}

// this.hasFormErrors = false;
const controls1 = this.videoResume.controls;
console.log(this.videoResume);
	/** check form */
	if (this.videoResume.invalid) {
		Object.keys(controls1).forEach(controlName =>
			controls1[controlName].markAsTouched()
		);

		// this.hasFormErrors = true;
		;
	}
	const controls2 = this.verification.controls;
	console.log(this.verification);
	/** check form */
	if (this.verification.invalid) {
		Object.keys(controls2).forEach(controlName =>
			controls2[controlName].markAsTouched()
		);
		return;
	}

	const jobSeekerObj=this.prepareJobSeeker();
	this.jobSeekerService.createJobSeekerProfile(jobSeekerObj).subscribe(res=>{
	if(res.status==200){
		alert(res.msg);
		this.router.navigateByUrl('dashboard/chat-home');
	}else{
		alert(res.msg);
	}
	},err=>{

	})


}

  // reference to the element itself: used to access events and methods
  private _elementRef: ElementRef

  // index to create unique ID for component
  idx = 'clip1';

  private config: any;
  private player: any; 
  private plugin: any;
  ifAllowCamera:boolean=false;
  
  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered
  ngAfterViewInit() {
    // ID with which to access the template's video element
    let el = 'video_' + this.idx;

    // setup the player via the unique element ID
    this.player = videojs(document.getElementById(el), this.config, () => {
      console.log('player ready! id:', el);

      // print version information at startup
      var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(msg);
    });

    // device is ready
    this.player.on('deviceReady', () => {
      console.log('device is ready!');
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
	  console.log('finished recording: ', this.player.recordedData);
	  this.player.record().saveAs({'video': 'my-video-file-name.webm'});

	//   var videoBlob = this.player.recordedData.getBlob();

	//   var videoBlobMp4 = new Blob(videoBlob, {type: 'video/mp4'});
	//   video.src = URL.createObjectURL(videoBlob);

	  this.uploadVideo(this.player.recordedData);

    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }
  uploadVideo(video){
	
this.uploadService.uploadJdVideo(video).subscribe(res=>{
		this.videoResume.controls['uploadVideo'].setValue(res);
		console.log(res);
	},err=>{
	
	});
	  }
  // use ngOnDestroy to detach event handlers and remove the player
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
      this.player = false;
    }
  }





//   allowCamera(){

// this.ifAllowCamera=true;
// }

//file upload

files: File[] = [];
 
onSelect(event) {
  console.log(event);
  this.files.push(...event.rejectedFiles);
  this.uploadResumeFile();
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

uploadResumeFile(){
if(this.files.length>0){
	this.uploadService.uploadJdFile(this.files[0]).subscribe(res=>{
		console.log(res);
			this.uploadResume.controls['uploadResume'].setValue(res);
	},err=>{

	})
}
}

files1: File[] = [];
 
onSelect1(event) {
  console.log(event);
  this.files1.push(...event.rejectedFiles);
  this.uploadDocumentFile();
}
 
onRemove1(event) {
  console.log(event);
  this.files1.splice(this.files1.indexOf(event), 1);
}


uploadDocumentFile(){
	if(this.files1.length>0){
		this.uploadService.verificationDocFile(this.files1[0]).subscribe(res=>{
		
				this.verification.controls['uploadDocument'].setValue(res);
				console.log(res);
			
		},err=>{
	
		})
	}
	}
	// City Names
	City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
// Choose city using select dropdown
changeCity(e) {
    console.log(e.value)
    this.college.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get college() {
    return this.createJobSeekerCard.get('college');
  }


}
export class FuncationAreaDropDown{
item_id:number;
item_text:string;
}
export class SkillsDropDown{
	item_id:number;
item_text:string;
}