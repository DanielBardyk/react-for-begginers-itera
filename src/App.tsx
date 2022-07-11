import './App.css';
import person from './data.json'


const App = () => (
    <div className="App">
      <h1>{person.name}</h1>
      <p>{person.about}</p>
      <p><a href={`mailto:${person.email}`}>{person.email}</a></p>
      <p><a href={`tel:${person.phone}`}>{person.phone}</a></p>
    </div>
)

export default App;
