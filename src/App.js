import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import TeamMembers from './components/TeamMembers/TeamMembers';

function App() {
    return ( 
        <div className = "App" >
            <Header></Header>
            <TeamMembers></TeamMembers>
        </div>
    );
}

export default App;