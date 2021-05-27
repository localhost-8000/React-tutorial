// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
    return (
        <div className="App">
            {/* <Greet name = "Ankur">
                <p>This is child prop</p>
            </Greet>
            <Greet name = "Rahul"/>
            <Welcome name = "Ankur">
                <p>child</p>
            </Welcome>
            <Welcome name = "Rahul">child</Welcome> */}
            {/* <Message></Message> */}
            <Counter />
        </div>
    );
}

export default App;
