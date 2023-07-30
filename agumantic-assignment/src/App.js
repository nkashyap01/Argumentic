import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import BodyFirst from './BodyFirst';
import Text from './Text';
import BodySecond from './BodySecond';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyFirst />
      <Text />
      <BodySecond />
      <Footer/>
    </div>
  );
}

export default App;
