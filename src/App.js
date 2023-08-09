import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Skills from './components/Skills';
import Quy from './components/Quy';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (
    <div id='main'>
      <Header />
      <Title />
      <Skills />
      <Quy />
      <Project />
      <Footer />
    </div>
    
  );
}

export default App;
