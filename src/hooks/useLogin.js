import { useEffect, useState } from 'react';

import { LOGIN_API } from '../utils/routes';
import { GUID } from '../utils/constants';

import { useUserContext } from '../contexts/UserContextProvider';

const useLogin = () => {
  const [login, setLogin] = useState();
  const [loading, setLoading] = useState(true);

  const userContext = useUserContext();

  useEffect(() => {
    let isMounted = true;

    const loginUser = async () => {
      try {
        const response = await (
          await fetch(LOGIN_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Username: 'test@bsgroup.eu',
              Password: 'Test12!@',
              Device: {
                PlatformCode: 'WEB',
                Name: `${GUID}`,
              },
            }),
          })
        ).json();
        if (isMounted) {
          userContext?.setUserContextValue(response);
          setLogin(response);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    loginUser();

    return () => {
      isMounted = false;
    };
  }, []);
  return { login, loading };
};

export default useLogin;
