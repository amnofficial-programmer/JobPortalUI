export class Constants {
   
    public static URL: any = {

        HOST_URL: 'http://macraxuserapiapp-env.eba-e7h2xmg2.ap-south-1.elasticbeanstalk.com/macrax/',
        // HOST_URL:'http://localhost:8090/macrax/',

        User_Singup: 'auth/signup',
        Login:'auth/authenticate',
        Job_Seeker_Add:'user/add/jobSeeker',
        College:'user/colleges',
        Degree:'user/degrees',
        Department:'user/departments',
        Experience:'user/experience',
        JobLocation:'user/job/location',
        Functional_Area:'user/functionalAreas',
        Salary_Range:'user/salaryRange',
        Skills:'user/skills',
        Recruiter:'user/recruiter/onboarding',

        Upload_Jd_File:'uplaod/jd/doc',
        Upload_Verification_Doc:'uplaod/verification/doc',
        Upload_Jd_Video:'uplaod/jd/video',
        GetRecruiters: 'auth/users?role=',
        GetJobSeekers: 'auth/users?role='


}
public static Roles:any={
    Job_Seeker:'0',
    Recuriter:'1',
    Admin:'2'
}

 
}
