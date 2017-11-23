import React, { Component } from 'react';
import { View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

// import Screens from './screens/Screens';

// // Emlpoyee Files
// import Employee from './screens/Employee';
// import MyJobs from './screens/MyJobs';
// import JobDetails from './screens/JobDetails';
// import PostJob from './screens/PostJob';
// import PostJob2 from './screens/PostJob2';
// import JobApplications from './screens/JobApplications';
// import JobApplication from './screens/JobApplication';
// import InterViewInvitation from './screens/InterViewInvitation';
// import JobInterviews from './screens/JobInterviews';
// import EditProfile from './screens/EditProfile';
// import MyPackage from './screens/MyPackage';
// import MyPackage2 from './screens/MyPackage2';
// import OrderStep from './screens/OrderStep';
// import OrderStep2 from './screens/OrderStep2';
// import Order from './screens/Order';
// import OrderHistory from './screens/OrderHistory';
// import OrderDetails from './screens/OrderDetails';

// //Importing JobSeeker Files
import Login from '../components/Login';
import Signup from '../components/Signup';
import GetStarted from '../components/GetStarted';
// import Jobs from './screens/Jobs';
// import AllJobs from './screens/AllJobs';
// import SearchResult from './screens/SearchResult';
// import JobDetails2 from './screens/JobDetails2';
// import Employer from './screens/Employer';
// import Apply from './screens/Apply';
// import Apply2 from './screens/Apply2';
// import Apply3 from './screens/Apply3';
// import Activities from './screens/Activities';
// import Interviews from './screens/Interviews';
// import InterviewDetails from './screens/InterviewDetails';
// import JobAlerts from './screens/JobAlerts';
// import JobAlerts2 from './screens/JobAlerts2';
// import CreateJobAlert from './screens/CreateJobAlert';
// import AlertResults from './screens/AlertResults';
// import EditProfile2 from './screens/EditProfile2';
// import EditProfile3 from './screens/EditProfile3';
// import EditProfile4 from './screens/EditProfile4';
// import EditProfile5 from './screens/EditProfile5';

// Intro Screens 
import Splash from "../components/splash";
import Intro from "../components/IntroSlide1";
import AllJobs from "../components/AllJobs";
import JobDetails from "../components/JobDetails";
import Employer from "../components/Employer";
import ApplyJob from "../components/Apply";

var RouterNative = () => {
  return (
    <Router>
      <Stack key="root">
        {/*Job Seeker */}
        {/* <Scene hideNavBar={true} key="splash" component={Splash} />
        <Scene hideNavBar={true} key="splashOne" component={Intro} />
        <Scene hideNavBar={true} key="login" component={Login} />
        <Scene hideNavBar={true} key="getStarted" component={GetStarted} />
        <Scene hideNavBar={true} key="signup" component={Signup} /> */}
        {/* <Scene hideNavBar={true} key="alljobs" component={AllJobs} />
        <Scene hideNavBar={true} key="jobDetails" component={JobDetails} />
        <Scene hideNavBar={true} key="employee" component={Employer} /> */}
        <Scene hideNavBar={true} key="apply" component={ApplyJob} />


        {/* <Scene hideNavBar={true} key="intro" component={Intro} />
        <Scene hideNavBar={true} key="editProfile5" component={EditProfile5} />
        <Scene hideNavBar={true} key="editProfile4" component={EditProfile4} />
        <Scene hideNavBar={true} key="editProfile3" component={EditProfile3} />
        <Scene hideNavBar={true} key="editProfile2" component={EditProfile2} />
        <Scene hideNavBar={true} key="alertResults" component={AlertResults} />
        <Scene hideNavBar={true} key="createJobAlert" component={CreateJobAlert} />
        <Scene hideNavBar={true} key="jobAlerts2" component={JobAlerts2} />
        <Scene hideNavBar={true} key="jobAlerts" component={JobAlerts} />
        <Scene hideNavBar={true} key="interviewDetails" component={InterviewDetails} />
        <Scene hideNavBar={true} key="myInterviews" component={Interviews} />
        <Scene hideNavBar={true} key="activities" component={Activities} />
        <Scene hideNavBar={true} key="applyNow3" component={Apply3} />
        <Scene hideNavBar={true} key="applyNow2" component={Apply2} />
        <Scene hideNavBar={true} key="applyNow" component={Apply} />
        <Scene hideNavBar={true} key="employer" component={Employer} />
        <Scene hideNavBar={true} key="jobDetails2" component={JobDetails2} />
        <Scene hideNavBar={true} key="searchResult" component={SearchResult} />
        <Scene hideNavBar={true} key="allJobs" component={AllJobs} />
        <Scene hideNavBar={true} key="jobs" component={Jobs} />
        <Scene hideNavBar={true} key="getStarted" component={GetStarted} />
        <Scene hideNavBar={true} key="signup" component={Signup} />
        <Scene hideNavBar={true} key="login" component={Login} />

        {/* Employee Screens */}
        {/* <Scene hideNavBar={true} key="orderDetails" component={OrderDetails} />
        <Scene hideNavBar={true} key="orderHistory" component={OrderHistory} />
        <Scene hideNavBar={true} key="order" component={Order} />
        <Scene hideNavBar={true} key="orderStep2" component={OrderStep2} />
        <Scene hideNavBar={true} key="orderStep" component={OrderStep} />
        <Scene hideNavBar={true} key="myPackage2" component={MyPackage2} />
        <Scene hideNavBar={true} key="myPackage" component={MyPackage} />
        <Scene hideNavBar={true} key="editProfile" component={EditProfile} />
        <Scene hideNavBar={true} key="jobInterviews" component={JobInterviews} />
        <Scene hideNavBar={true} key="interviewInvitation" component={InterViewInvitation} />
        <Scene hideNavBar={true} key="jobApp" component={JobApplication} />
        <Scene hideNavBar={true} key="jobApps" component={JobApplications} />
        <Scene hideNavBar={true} key="postJob2" component={PostJob2} />
        <Scene hideNavBar={true} key="postJob" component={PostJob} />
        <Scene hideNavBar={true} key="myJobs" component={MyJobs} />
        <Scene hideNavBar={true} key="employee" component={Employee} /> */}

      </Stack>
    </Router>
  )
}

export default RouterNative;