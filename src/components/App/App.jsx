import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Time from '../Time/Time';
import Weather from '../Weather/Weather';
import Error404 from '../Error404/Error404';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/time" element={<Time />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
