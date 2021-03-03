import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
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
import { SessionStorageService } from 'ngx-webstorage';

import videojs from 'video.js';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as RecordRTC from 'recordrtc';
import * as Record from 'videojs-record/dist/videojs.record.js';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/reponse.model';

@Component({
	selector: 'app-profile-register',
	templateUrl: './profile-register.component.html',
	styleUrls: ['./profile-register.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ProfileRegisterComponent implements OnInit {

	isLinear = false;
	createJobSeekerCard: FormGroup;
	videoResume: FormGroup;
	profilePicture: FormGroup;
	uploadResume: FormGroup;
	verification: FormGroup;
	chatWithRecruiter: FormGroup;
	collegesList:CollegeModel[]=[];
	departmentsList:DepartmentModel[]=[];
	degreeList:DegreeModel[]=[];
	functaionAreaList:FunctionalAreaModel[]=[];
	skillList:SkillInfoModel[]=[];
	experienceList:ExperienceModel[]=[];
	salaryRangesList:SalaryInfoModel[]=[];
	selectedItems = [];
	funcationAreaList = new Array();
	funcationArea = "";
	MultSelect : any= {};
	selectedAreas :any =[];
	MultSelectSkill : any= {};
	ids :any =[];
	propicUrl='';
	constructor(private _formBuilder: FormBuilder,
				private router:Router,
				private jobSeekerService:JobSeekerService,
				elementRef: ElementRef,
				private uploadService:FileUploadService,
				private sessionStore: SessionStorageService) { 

		this.player = false;
		this.propicUrl = ''
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
		this.getAllExprience();
		this.getAllFuncationalArea();
	}


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
			this.functaionAreaList=res.data;
			//console.log("Area Lists"+this.functaionAreaList);
			}else{
				alert(res.msg)
			}
			
		},err=>{
				
		});
	}
	getAllSkills(ids){
		debugger
		this.jobSeekerService.getAllSkills(ids).subscribe(res=>{
			console.log(res);
			if(res.status==200){
				this.skillList=res.data;
			}else{
				alert(res.msg)
			}
			
			},err=>{
				
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

	changePropic(event){
		if(event.target.files.length>0){
			const file = event.target.files[0];
			this.uploadService.uploadProfileFile(file).subscribe(res=>{ 
				const response = res.data
				this.propicUrl = response['url']
			},err=>{
	
			})
		}
	}

	getProfilePic(){
		if(!this.propicUrl || undefined == this.propicUrl || "" ==this.propicUrl)
			return "/assets/images/lines.png"
		return this.propicUrl;
	}

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
			skills: [[], Validators.required],
			profilePicture:['', Validators.required]
		});
		
		this.videoResume = this._formBuilder.group({
			uploadVideo: ['', Validators.required]
		});

		this.profilePicture = this._formBuilder.group({
			profilePicture: ['', Validators.required]
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
		//var username = localStorage.getItem('macrax-emailId')
		var username = this.sessionStore.retrieve('macrax-emailId')
		_jobSeeker.userName = username
		_jobSeeker.profileUrl = this.propicUrl;
	
	
		var funcationArea:string[]=[];
		var skill:string[]=[];
		var f:string[] = [];

		controls.functionalArea.value.forEach(element => {
			funcationArea.push(element['functionalArea'])
		});

		controls.skills.value.forEach(element => {
			skill.push(element['skill']);
		});

			
		if(undefined != this.videoResume.controls['uploadVideo'].value && ''!=this.videoResume.controls['uploadVideo'].value){
			let videoResponse = JSON.parse(this.videoResume.controls['uploadVideo'].value)
			_jobSeeker.videoUrl = videoResponse.data
		}else{
			_jobSeeker.videoUrl = '';
		}

		if(undefined != this.uploadResume.controls['uploadResume'].value && '' != this.uploadResume.controls['uploadResume'].value){
			let uploadResume = JSON.parse(this.uploadResume.controls['uploadResume'].value)
			_jobSeeker.docUrl = uploadResume.data
		}
		
		if(undefined != this.verification.controls['uploadDocument'].value && '' != this.verification.controls['uploadDocument'].value){
			let verification = JSON.parse(this.verification.controls['uploadDocument'].value)
			_jobSeeker.verificationCardUrl = verification.data
		}
		
		_jobSeeker.functionalArea=funcationArea;
		_jobSeeker.verificationCardId='2'
		//_jobSeeker.profileUrl='https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
		_jobSeeker.skills=skill;
		return _jobSeeker
	}
	onSave(){
		const controls = this.createJobSeekerCard.controls;

		/** check form */
		if (this.createJobSeekerCard.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
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
	  //this.player.record().saveAs({'video': 'my-video-file-name.webm'});

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