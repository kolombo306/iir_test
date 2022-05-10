import { useNavigate } from 'react-router-dom';

function Button({
  caption,
  route = '',
  cb = null,
  type = 'button',
  buttonClass = '',
  disabled = false,
}) {
  const navigate = useNavigate();
  return (
    <button
      className={`btn btn-primary mx-1 my-2 ${buttonClass || 'btn-lg'}`}
      type={type}
      disabled={disabled}
      onClick={route ? () => navigate(route) : () => cb()}
    >
      {caption}
    </button>
  );
}

export default Button;
