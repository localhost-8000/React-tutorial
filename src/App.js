// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

function App() {
    return (
        <div className="App">
            <Greet name = "Ankur">
                <p>This is child prop</p>
            </Greet>
            <Greet name = "Rahul"/>
            <Welcome name = "Ankur">
                <p>child</p>
            </Welcome>
            <Welcome name = "Rahul">child</Welcome>
        </div>
    );
}

export default App;
