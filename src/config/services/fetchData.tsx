import { useState, useCallback } from 'react';
import client from './clients';
import { responseMessages } from '../utils';

const resourceDefaultOptions = {
  url: '/',
  method: 'get',
  isAsync: false,
  callback: null
};

const useFetchData = resourceOptions => {
  const { url, headers, method, isAsync, callback } = {
    ...resourceDefaultOptions,
    ...resourceOptions
  };

  const [response, setResponse] = useState({
    data: null,
    status: false,
    status_code: null,
    loading: false
  });
  let callAPI = null;

  if (isAsync) {
    callAPI = useCallback(
      async data => {
        setResponse(prevState => ({ ...prevState, loading: true }));
        await client[method](url, data, {
          headers
        })
          .then(res => {
            setResponse({
              data: res.data,
              status: true,
              status_code: res.status,
              loading: false
            });
            responseMessages('success');
          })
          .catch(err => {
            setResponse({
              data: null,
              status: false,
              status_code: err.response.data.Code,
              loading: false
            });
            responseMessages('error', err.response.data.Errors);
          });
      },
      [url, headers, method]
    );
  } else {
    callAPI = useCallback(
      data => {
        setResponse(prevState => ({ ...prevState, loading: true }));
        let config;
        if (headers) {
          config = { headers };
        }
        client[method](url, data, config || undefined)
          .then(res => {
            setResponse({
              data: res.data,
              status: true,
              status_code: res.status,
              loading: false
            });
            responseMessages('success');
            if (callback) {
              callback(res)
            }
          })
          .catch(err => {
            if (err.response && err.response.data) {
              setResponse({
                data: null,
                status: false,
                status_code:  err.response.data.Code,
                loading: false
              });
              responseMessages('error', err.response.data.Errors);
              if (callback) {
                callback(err);
              }
            }
          });
      },
      [url, headers, method]
    );
  }

  return [response, callAPI];
};

export default useFetchData;