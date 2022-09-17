// Libraries
import { Route, Redirect } from "react-router-dom";

// HOC
import HomeHOC from "./HOC/Home.HOC";
import DashboardHOC from "./HOC/Patient.Dashboard.HOC";
import RequestHOC from "./HOC/Request.HOC";
import SearchingHOC from "./HOC/Searching.HOC";

// Pages
import HomePage from "./Components/pages/Home.page";
import DashboardPage from "./Components/pages/Patient.Dashboard.page";
import DoctorDashboardHOC from "./HOC/Doctor.Dashboard.HOC";
import DoctorDashboardPage from "./Components/pages/Doctor.Dashboard";
import PastRequests from "./Components/pages/Requests/Past.Requests";
import UpcomingRequests from "./Components/pages/Requests/Upcoming.Requests";
import RequestsRequests from "./Components/pages/Requests/Requests.Requests";
import { Searchingpage } from "./Components/pages/Searching.page";

function App() {
  return (
    <>
    <Route path="/" exact>
      <Redirect to="/home"/>
    </Route>
    <Route path="/request/:id" exact>
      <Redirect to="/request/:id/requests"/>
    </Route>
      <HomeHOC path="/home" exact component={HomePage} />
      <DashboardHOC path="/padash/:id" exact component={DashboardPage}/>
      <DoctorDashboardHOC path="/docdash/:id" exact component={DoctorDashboardPage}/>
      <RequestHOC path="/request/:id/past" exact component={PastRequests}/>
      <RequestHOC path="/request/:id/upcoming" exact component={UpcomingRequests}/>
      <RequestHOC path="/request/:id/requests" exact component={RequestsRequests}/>
      <SearchingHOC path="/search" exact component={Searchingpage}/>
    </>
  );
}

export default App;
