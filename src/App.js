import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import ContactusPage from './Views/ContactUs_page';
import Fleet from './Views/Fleet';
import Blogs from './Views/Blogs';
import BlogPost from './BlogsData/BlogPost';





function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/contact' element={<ContactusPage/>}/>
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
