import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';

import AboutUs from './Components/AboutUs';
import OurMission from './Components/OurMission';
import Vision from './Components/Vision';
import MdDesk from './Components/MdDesk';
import LongCourses from './Components/LongCourses';
import ShortCourses from './Components/ShortCourses';
import ClassGrid from './Components/ClassGrid';
import JanSewaServices from './Components/JanSewaServices';
import CscServices from './Components/CscServices';
import BankingServices from './Components/BankingServices';
import LibraryServices from './Components/LibraryServices';
import AcademyCourses from './Components/AcademyCourses';
import FAQSection from './Components/FAQSection';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';
import Admission from './Pages/Admission';
import Signup from './Components/Signup';
import Login from './Components/Login';

import TopHeading from './Components/TopHeading';
import HeaderLogo from './Components/HeaderLogo';
import NavigationBar from './Components/NavigationBar';
import ImageMarquee from './Components/ImageMarquee';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import CompetitionForm from './Components/CompetitionForm';
import ScholarshipsForm from './Components/ScholarshipsForm';
import TopperStudents from './Components/TopperStudents';
import CheckFormStatus from './Components/CheckFormStatus';
import MarksheetVerification from './Components/MarksheetVerification';
import OutTeam from './Components/OutTeam';
import ICardCheck from './Components/ICardCheck';
import ICardDownload from './Components/ICardDownload';
import AdmitCardCheck from './Components/AdmitCardCheck';
import AdmitCardDownload from './Components/AdmitCardDownload';
import CheckMarksheet from './Components/CheckMarksheet';
import CheckScholarshipStatus from './Components/CheckScholarshipStatus';
import ScholarshipResult from './Components/ScholarshipResult';
import ResultCheck from './Components/ResultCheck';
import ResultShow from './Components/ResultShow';

// ✅ Utility function to check if layout should be hidden
function shouldHideLayout(path) {
  const hiddenRoutes = ['/signup', '/login',];
  return hiddenRoutes.some(route => path.startsWith(route));
}

// ✅ Layout Wrapper with conditional header/footer/nav
function LayoutWrapper({ children }) {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase();
  const hideLayout = shouldHideLayout(currentPath);

  return (
    <>
      {!hideLayout && <TopHeading />}
      {!hideLayout && <HeaderLogo />}
      {!hideLayout && <NavigationBar />}
      {children}
      {!hideLayout && <ImageMarquee />}
      {!hideLayout && <Footer />}
    </>
  );
}

// ✅ Main App Component
function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/competitionform" element={<CompetitionForm />} />
          <Route path="/scholarshipsform" element={<ScholarshipsForm />} />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourmission" element={<OurMission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mddesk" element={<MdDesk />} />
          <Route path="/longcourses" element={<LongCourses />} />
          <Route path="/shortcourses" element={<ShortCourses />} />
          <Route path="/classgrid" element={<ClassGrid />} />
          <Route path="/jansewaservices" element={<JanSewaServices />} />
          <Route path="/bankingservices" element={<BankingServices />} />
          <Route path="/cscservices" element={<CscServices />} />
          <Route path="/libraryservices" element={<LibraryServices />} />
          <Route path="/academycourses" element={<AcademyCourses />} />
          <Route path="/faqsection" element={<FAQSection />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/topperstudents" element={<TopperStudents />} />
          <Route path="/checkformstatus" element={<CheckFormStatus />} />
          <Route path="/resultcheck" element={<ResultCheck />} />
          <Route path="/marksheetvertification" element={<MarksheetVerification />} />
          <Route path="/checkscholarshipstatus" element={<CheckScholarshipStatus />} />
          <Route path="/AdmitCardCheck" element={<AdmitCardCheck />} />
          <Route path="/ICardCheck" element={<ICardCheck />} />
          <Route path="/ourteam" element={<OutTeam />} />
          <Route path="/icarddownload" element={<ICardDownload />} />
          <Route path="/admitcarddownload" element={<AdmitCardDownload />} />
          <Route path="/checkmarksheet" element={<CheckMarksheet />} />
          <Route path="/scholarshipresult" element={<ScholarshipResult />} />
          <Route path="/resultshow" element={<ResultShow />} />

          <Route path="*" element={<NotFound />} />


        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
