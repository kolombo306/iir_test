import '../App/App.css';
import Button from '../Button/Button';

function Error404() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column fullheight">
      <h3 className="text-center">Указанный путь не найден на сервере</h3>
      <Button caption="На главную" route="/" />
    </div>
  );
}

export default Error404;
