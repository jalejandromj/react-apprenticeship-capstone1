import { useState, useEffect } from 'react';

import axios from 'axios';

const useYoutubeApi = (url, params) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(url, {
      params: {
        key: process.env.REACT_APP_YT_API_KEY,
        maxResults: (params.maxResults || 5),
        part: (params.part || "snippet"),
        type: (params.type || "video"),
        q: (params.q || null),
        id: (params.id || null),
      },
    })
    .then(function (response) {
      // handle success
      console.log('[SUCCESS] YT API call...', response);
      setResponse(response);
    })
    .catch(function (error) {
      // handle error
      console.log('[ERROR] On YT API call...', error);
      setError(error);
    });
  }, [url, params.q]);

  return { response, error };
};

export default useYoutubeApi;