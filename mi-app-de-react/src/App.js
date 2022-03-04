import './App.css';
import SideBar from './components/SideBar';
import ContentWrapper from './components/ContentWrapper';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hola !!!! Estoy corriendo </p>

      </header>
      <main>
        <SideBar />
        <ContentWrapper />
      </main>
      

    </div>
  );
}

export default App;
