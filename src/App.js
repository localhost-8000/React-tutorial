// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import './appStyle.css'
import styles from './components/appStyle.module.css'

function App() {
    return (
        <div className="App">
            <h1 className='error'>Error</h1>
            <h1 className={styles.success}>Success</h1>
            {/* <Stylesheet primary={true}/> */}
            {/* <NameList /> */}
            {/* <UserGreeting /> */}
            {/* <ParentComponent /> */}
            {/* <EventBind /> */}
            {/* <FunctionClick /> */}
            {/* <Greet name = "Ankur">
                <p>This is child prop</p>
            </Greet>
            <Greet name = "Rahul"/> */}
            {/* <Welcome name = "Ankur">
                <p>child</p>
            </Welcome>
            <Welcome name = "Rahul">child</Welcome> */}
            {/* <Message></Message> */}
            {/* <Counter /> */}
        </div>
    );
}

export default App;
