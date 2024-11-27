import './App.css'; 
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent'; 
import './assets/style/MainContent.css';
 
function App() {
  return (
    <div className="app">

        <Header />
        
        <div className='Nm'>
          <Navigation /> 
          <MainContent />
        </div>
    </div>
  );
}
                
export default App;              

