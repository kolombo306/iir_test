import Button from '../Button/Button';
import '../App/App.css';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center fullheight">
      <Button caption="Время" route="/time" />
      <Button caption="Погода" route="/weather" />
    </div>
  );
}

export default Home;
