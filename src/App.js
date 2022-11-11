import './App.css';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <div id="personal-information">
        <div>Personal Information</div>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Title" />
      </div>
    </div>
  );
}

export default App;
