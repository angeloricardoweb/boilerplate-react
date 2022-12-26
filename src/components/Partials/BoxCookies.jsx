import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Cookies from 'js-cookie';
import { useState } from 'react';

export const BoxCookies = () => {
  let cookies =
    Cookies.get('user-accept-cookies') &&
    JSON.parse(JSON.parse(Cookies.get('user-accept-cookies')));
  console.log(cookies);
  const [openBoxCookie, setOpenBoxCookie] = useState(true);

  return (
    <div div className='main_container'>
      {openBoxCookie && !cookies && (
        <div className=" flex flex-col px-6 py-2 justify-between bg-brand-gray-300 border w-full md:max-w-[900px] z-[101] position-center">
          <div>
            <h4 className="text-brand-gray-100 text-2xl font-semibold">
              Esse site usa cookies
            </h4>
            <p className="my-4 md:my-2">
              Nós armazenamos dados temporariamente para melhorar a sua
              experiência de navegação e recomendar conteúdo de seu interesse.
              Ao utilizar nossos serviços, você concorda com tal monitoramento.
            </p>
          </div>
          <div className="flex justify-between items-center">
            <HashLink
              to="/politica-de-privacidade#inicio-privacidade"
              className="link"
            >
              Política de Privacidade
            </HashLink>
            <button
              onClick={() =>
                Cookies.set(
                  'user-accept-cookies',
                  true,
                  {
                    expires: 31557600,
                  },
                  setOpenBoxCookie(false)
                )
              }
            >
              Aceitar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
