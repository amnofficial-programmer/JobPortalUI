export class UserModel {
	 id:number;
	 userName:String;
	 password:String;
     role:String;
     mobileNo:string;
       addTime:Date;
       lastUpdated:Date;
       ipAddress:string;







     clear(){
         this.id=0;
         this.userName='';
         this.password='';
         this.role='';
     }
    
}