import React, { useEffect, useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import { register, reset } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  const onRegister = () =>
    dispatch(
      register({ firstName, lastName, email, address, phone, password })
    );

  useEffect(() => {
    if (isError) {
      message.split('.').forEach(message =>
        toast.error(message, {
          className: 'dark-toast',
        })
      );
    }

    // If user is authenticated redirect to home
    if (isSuccess || user) {
      toast.success(message, {
        className: 'dark-toast',
      });
      navigate('/login');
    }

    dispatch(reset());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, user]);

  return (
    <div>
      <div className="bg-black text-yellow-300 min-h-screen flex flex-col justify-around items-center mt-2">
        {/* Top content */}
        <div className="animate-bounceY">
          <BiSolidDownArrow className="text-4xl text-yellow-400 " />
        </div>
        <div className="text-4xl text-center mb-1">
          <h1 className="my-16 font-bold font-inter">
            Mar7be bik fil famille mte3na...
          </h1>
        </div>
        {/* Middle content */}
        <div className="w-full flex flex-col justify-between items-center">
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                Prénom
              </span>
            </div>
            <div className="w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black text-yellow-300 py-2 w-50"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="Votre Prénom"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                Nom
              </span>
            </div>
            <div className="w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black text-yellow-300 py-2 w-50"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="Votre Nom"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                Téléphone
              </span>
            </div>
            <div className=" w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black w-50 py-2 text-yellow-300"
                type="text"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Votre numéro de téléphone"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                E-mail
              </span>
            </div>
            <div className=" w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black w-50 py-2 text-yellow-300"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Votre adresse e-mail"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                Adresse
              </span>
            </div>
            <div className=" w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black w-50 py-2 text-yellow-300"
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Votre adresse"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-50 mb-2">
            <div className="flex items-center border-2 border-yellow-400 w-50 md:w-100">
              <span className="text-xl text-yellow-300 px-4 font-bold">
                Mot de Passe
              </span>
            </div>
            <div className=" w-50 border-2 border-yellow-400 flex items-center justify-center md:w-full">
              <input
                className="bg-black w-50 py-2 text-yellow-300"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Votre Mot de passe"
              />
            </div>
          </div>
        </div>
        <div className="my-5 bg-black h-8 w-full flex items-center justify-center">
          <BiSolidDownArrow className="text-4xl text-yellow-300 ml-80" />
          <button
            className="text-xl font-bold text-yellow-300 px-2"
            onClick={onRegister}
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
