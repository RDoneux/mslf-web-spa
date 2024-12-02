import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import NotFound from './routes/not-found/NotFound';
import NavBar from './components/nav-bar/NavBar';
import Poems from './routes/poems/Poems';
import About from './routes/about/About';

import styles from './App.module.css';
import Footer from './components/footer/Footer';
import Poem from './routes/poems/Poem';
import Blog from './routes/blog/Blog';
import Blogs from './routes/blog/Blogs';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className={styles['content']}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="poems" element={<Poems />} />
          <Route path="poem/:id" element={<Poem />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blog/:id" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
