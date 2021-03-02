export class Constants {
   
    public static URL: any = {

        DOMAIN_URL: 'https://tier1jobs.in/',
        HOST_URL: 'https://tier1jobs.in/macrax/',
        // HOST_URL:'http://localhost:8090/macrax/',
        CHAT_SERVER_URL : 'http://103.12.211.10:3000/',
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
        Add_Recruiter:'user/recruiter/onboarding',

        Upload_Jd_File:'uplaod/jd/doc',
        Upload_Profile_File:'uplaod/profile',
        Upload_Verification_Doc:'uplaod/verification/doc',
        Upload_Jd_Video:'uplaod/jd/video',
        GetRecruiters: 'auth/users?role=',
        GetJobSeekers: 'auth/users?role=',
        GetAllHostoricalChats: 'chatserver/getHistoricalChats',
        GetAllJobs: 'user/jobs?index=',
        GetAllJobSeekers:'user/active/jobSeeker',
        GetJobsCount: 'admin/recruiter/get/all/records',

}
public static Roles:any={
    Job_Seeker:'0',
    Recuriter:'1',
    Admin:'2'
}

 
}
