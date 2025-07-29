import {CalculateScore} from '../src/Components/CalculateScore';
import {mystyle} from '../src/Stylesheets/mystyle.css';
function App() {
    return (
        <div>
            <CalculateScore 
            
                Name={"Steeve"}
                School={"DNV Public School"}
                total={284}
                goal={3}
            />
            <mystyle/>
        </div>
    );
}

export default App;