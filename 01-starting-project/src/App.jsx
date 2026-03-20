import { Fragment } from 'react/jsx-runtime';
import componentImg from './assets/components.png';
import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx'
import Examples from './components/Examples.jsx';

function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;




