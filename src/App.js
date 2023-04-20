import Invitation from './component/Invitation';
import './App.css';

function App() {
  return (
    
     <Invitation 
      subject="Birthday Party Invitation"
      to="jaGdish@gmail.com"
      name="jaGdish"
      event="birhtday party"
      friends="Ritu, Saurabh, Kartik"
      location="Green field Avenue"
    />
    
  );
}

export default App;
