import { useState, useEffect } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { login, reset } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  const onLogin = () => dispatch(login({ email, password }));

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        className: 'dark-toast ',
      });
    }

    // If user is authenticated redirect to home
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, user]);

  return (
    <div className="bg-black text-yellow-300 min-h-screen flex flex-col justify-around items-center">
      {/* Top content */}
      <div className="text-4xl text-center mb-16">
        <h1 className="my-16 font-bold font-inter">Ahla w sahla...</h1>
      </div>
      {/* Middle content */}
      <div className="w-full flex flex-col justify-between items-center">
        <div className="flex flex-wrap w-50 mb-2">
          <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
            <span className="text-xl text-yellow-300 px-4 font-bold">
              Utilisateur
            </span>
          </div>
          <div className="w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
            <input
              className="bg-black text-yellow-300 py-2 w-50"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-50">
          <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
            <span className="text-xl text-yellow-300 px-4 font-bold">
              Mot de passe
            </span>
          </div>
          <div className=" w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
            <input
              className="bg-black w-50 py-2 text-yellow-300"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Votre mot de passe"
            />
          </div>
        </div>
      </div>
      <div className="my-5 bg-black h-8 w-full flex items-center justify-center">
        <BiSolidDownArrow className="text-4xl text-yellow-300 ml-80" />
        <button
          onClick={onLogin}
          className="text-xl font-bold text-yellow-300 px-2"
        >
          {isLoading ? 'Connecting...' : 'Connexion'}
        </button>
      </div>
    </div>
  );
};

export default Login;
