/* eslint-disable operator-linebreak */
import { useEffect, useState } from 'react';

import { useUserContext } from '../contexts/UserContextProvider';
import fetchPostData from '../utils/fetchPostData';
import { MEDIA_API } from '../utils/routes';

const getMedia = async ({ MediaListId, Token }) => {
  const response = await fetchPostData(MEDIA_API, {
    body: {
      MediaListId,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 1,
      PageSize: 15,
    },
    Token,
  });

  return response;
};

const useMediasLists = ({ login }) => {
  const [mediaLists, setMediaLists] = useState();
  const [isMediaListsLoading, setMediaListsLoading] = useState(true);

  const userContext = useUserContext();

  useEffect(() => {
    let isMounted = true;

    const fetchMedia = async () => {
      try {
        const userContextValue = userContext?.userContextValue;
        if (userContextValue) {
          const Token = userContextValue.AuthorizationToken?.Token;
          const mediaOne = await getMedia({ MediaListId: 2, Token });
          const mediaTwo = await getMedia({ MediaListId: 3, Token });

          if (isMounted) {
            setMediaLists([mediaOne, mediaTwo]);
            setMediaListsLoading(false);
          }
        }
      } catch (error) {
        console.error(error);
      }
      return null;
    };
    fetchMedia();

    return () => {
      isMounted = false;
    };
  }, [login]);
  return { mediaLists, isMediaListsLoading };
};

export default useMediasLists;
