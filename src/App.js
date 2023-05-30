import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Homepage from './Components/Homepage';
import Testimonals from './Components/Testimonals';
import Footer from './Components/Footer';
import ContactSection from './Components/ContactSection';
import ContactUs_page from './Views/ContactUs_page';
import Fleet from './Views/Fleet';
import Blogs from './Views/Blogs';
import BlogPost from './BlogsData/BlogPost';





function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes> */}
        {/* </Routes>
      </Router> */}
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/contact' element={<ContactUs_page/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/fleet' element={<Fleet/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
