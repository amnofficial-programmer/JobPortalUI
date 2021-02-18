import { Component, OnInit, ElementRef } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { RecruiterModel } from 'src/app/models/recruiter.model';
import { DepartmentModel } from 'src/app/models/department.model';
import { CollegeModel } from 'src/app/models/college.model';
import { DegreeModel } from 'src/app/models/degree.model';
import { FunctionalAreaModel } from 'src/app/models/functional-area.model';
import { SkillInfoModel } from 'src/app/models/skill-info.model';
import { ExperienceModel } from 'src/app/models/experience.model';
import { SalaryInfoModel } from 'src/app/models/salary-info.model';
import { JobSeekerService } from 'src/app/services/job-seeker.service';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { SessionStorageService } from 'ngx-webstorage';
//capture video
import videojs from 'video.js';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as RecordRTC from 'recordrtc';

// register videojs-record plugin with this import
import * as Record from 'videojs-record/dist/videojs.record.js';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruiter-profile-register',
  templateUrl: './recruiter-profile-register.component.html',
  styleUrls: ['./recruiter-profile-register.component.css']
})
export class RecruiterProfileRegisterComponent implements OnInit {

	isLinear = false;
	propicUrl=''
	createRecruiterCard: FormGroup;
	videoResume: FormGroup;
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



	disabled = false;
	ShowFilter = false;
	limitSelection = false;
	funcationAreaDropDownList:FuncationAreaDropDown[]=[]
	selectedItems: any = [];
	dropdownSettings: any = {};
	public data = [];

	//capture video
 	// reference to the element itself: used to access events and methods
  	private _elementRef: ElementRef

	// index to create unique ID for component
	idx = 'clip1';

	private config: any;
	private player: any; 
	private plugin: any;
	ifAllowCamera=false;
	MultSelect : any= {};
	selectedAreas :any =[];
	MultSelectSkill : any= {};
	ids :any =[];
	joblocationList:any[]=[];
	constructor(private _formBuilder: FormBuilder,
				private router:Router ,
				private jobSeekerService:JobSeekerService,
				private recruiterService:RecruiterService,
				elementRef: ElementRef,
				private uploadService:FileUploadService,
				private sessionStore: SessionStorageService) { 

		this.player = false;
		this.propicUrl ='';
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
		this.getAllColleges();
		this.getAllDegree();
		this.getAllJobLocation()
		this.getAllExprience();
		this.getAllSararyRanges();
		this.getAllFuncationalArea();
	}

	configDropDownSetting(){
			this.dropdownSettings = {
				singleSelection: false,
				idField: 'item_id',
				textField: 'item_text',
				selectAllText: 'Select All',
				unSelectAllText: 'UnSelect All',
				itemsShowLimit: 3,
				allowSearchFilter: false
			};
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
		//debugger
		this.jobSeekerService.getAllFunctionalAreas().subscribe(res=>{
			console.log(res);
			if(res.status==200){

				this.configDropDownSetting();
		this.functaionAreaList=res.data;
			}else{
				alert(res.msg)
			}	
			},err=>{

			});
	}
	getAllSkills(ids){
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

	getAllJobLocation(){
		//debugger
		this.jobSeekerService.getAllJobLocation().subscribe(res=>{
			console.log(res);
			if(res.status==200){
				this.joblocationList=res.data;
				console.log("jobloc:"+this.joblocationList)
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
	this.ids = items
	this.ids = []

	}


	onItemSelectSkill(item: any) {
	console.log(item);

	}
	toogleShowFilter() {
		this.ShowFilter = !this.ShowFilter;
		this.dropdownSettings = Object.assign({}, this.dropdownSettings, { allowSearchFilter: this.ShowFilter });
	}

	handleLimitSelection() {
		if (this.limitSelection) {
			this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: 2 });
		} else {
			this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: null });
		}
	}

	createForm(){

		this.createRecruiterCard = this._formBuilder.group({
			fullName: ['', Validators.required],
			profileHeadline: ['', Validators.required],
			college: ['', Validators.required],
			companyName: ['', Validators.required],
			department: ['', Validators.required],
			degree: ['', Validators.required],
			experience: ['', Validators.required],
			functionalArea: [[], Validators.required],
			offered_salary: ['', Validators.required],
			jobLocation: ['', Validators.required],
			jobRole: ['', Validators.required],
			skills: [[], Validators.required]
		});
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
	}

	onChangeDegreeCombox(event, id){
		this.getAllDepartments(id);
	}
	onChangeFunctionaAreaCombox(id){
	this.getAllSkills(id);
	}

	prepareRecruiterProfile(): RecruiterModel{
		
		const controls = this.createRecruiterCard.controls;
		const _recruiter = new RecruiterModel();

		_recruiter.fullName=controls.fullName.value;
		_recruiter.profileHeadline=controls.profileHeadline.value;
		_recruiter.experience=controls.experience.value;
		_recruiter.offered_salary=controls.offered_salary.value;
		_recruiter.department=controls.department.value;
		_recruiter.degree=controls.degree.value;
		_recruiter.companyName=controls.companyName.value;
		_recruiter.college=controls.college.value;
		//var username = localStorage.getItem('macrax-emailId')
		var username = this.sessionStore.retrieve('macrax-emailId')
		_recruiter.userName = username
		_recruiter.jobRole = controls.jobRole.value
		_recruiter.jobLocation = controls.jobLocation.value

		var funcationArea:string[]=[]
		var skill:string[]=[];
		let functionalAresofRec = '';
		controls.functionalArea.value.forEach(element => {
			functionalAresofRec = element['functionalArea']
		});

		controls.skills.value.forEach(element => {
			skill.push(element['skill']);
		});

		
		if(undefined != this.videoResume.controls['uploadVideo'].value && ''!=this.videoResume.controls['uploadVideo'].value){
			let videoResponse = JSON.parse(this.videoResume.controls['uploadVideo'].value)
			_recruiter.videoUrl = videoResponse.data
		}else{
			_recruiter.videoUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/JdMp4/1000020/video_1607682624170.mp4'
		}

		if(undefined != this.uploadResume.controls['uploadResume'].value && '' != this.uploadResume.controls['uploadResume'].value){
			let uploadResume = JSON.parse(this.uploadResume.controls['uploadResume'].value)
			_recruiter.docUrl = uploadResume.data
		}else{
			_recruiter.docUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
		}
		
		if(undefined != this.verification.controls['uploadDocument'].value && '' != this.verification.controls['uploadDocument'].value){
			let verification = JSON.parse(this.verification.controls['uploadDocument'].value)
			_recruiter.verificationCardUrl = verification.data
		}else{
			_recruiter.verificationCardUrl = 'https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
		}

		_recruiter.functionalArea=functionalAresofRec;
		_recruiter.jobSkills=skill;
		_recruiter.verificationCardId='2'
		_recruiter.profileUrl='https://macrax-upload-buckets.s3.ap-south-1.amazonaws.com/VerificationDoc/13/CoverLetter4Dec.docx'
		return _recruiter
	}
	onSave(){
		const controls = this.createRecruiterCard.controls;
		/** check form */
		if (this.createRecruiterCard.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
		}
		const controls1 = this.videoResume.controls;
		console.log(this.videoResume);
		/** check form */
		if (this.videoResume.invalid) {
			Object.keys(controls1).forEach(controlName =>
				controls1[controlName].markAsTouched()
			);
		}

		// this.hasFormErrors = false;
		const controls2 = this.verification.controls;
		console.log(this.verification);
		/** check form */
		if (this.verification.invalid) {
			Object.keys(controls2).forEach(controlName =>
				controls2[controlName].markAsTouched()
			);
			return;
	}


		const recruiterObj=this.prepareRecruiterProfile();
		this.recruiterService.createRecruiterProfile(recruiterObj).subscribe(res=>{
		if(res.status==200){
			alert(res.msg);
			this.router.navigateByUrl('dashboard/chat-home');
		}else{
			alert(res.msg);
		}


		},err=>{

		})
	}

	//capture video
	allowCamera(){
		this.ifAllowCamera=true;
	}
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

		let fileName = "video_" + new Date().getMilliseconds() + ".webm";
			// will be interpreted in the server as a file
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
			// var videoBlobMp4 = new Blob(video, {type: 'video/mp4'});
		this.uploadService.uploadJdVideo(video).subscribe(res=>{
			// this.videoResume.('uploadVideo').se
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
		
				this.uploadResume.controls['uploadResume'].setValue(res);
				console.log(res);
			
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

}
export class FuncationAreaDropDown{
item_id:number;
item_text:string;
}
export class SkillsDropDown{
	item_id:number;
item_text:string;
}