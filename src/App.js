import "./App.scss";
// import Input from './components/Input';
// import Textarea from './components/Textarea';
// import Button from './components/Button';

import PersonalInformation from "./views/PersonalInformation";
import CVPreview from "./views/CVPreview";

function App() {
  return (
    <div className="App">
      <main>
        <PersonalInformation />
        <CVPreview />
      </main>
    </div>
  );
}

export default App;
