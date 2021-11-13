import './App.css';
import Images from './components/images';
import Button from './components/button';

function App() {

    return (
        <div className="App">
            <Images/>
            <Button title={'Learn React'} link={'react.com'}/>
        </div>
    );
}

export default App;
