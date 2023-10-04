import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { authenticationService } from '../auth.service';
import { interviewerService } from '../interviewer.service';

/*
 * Handle pre request
 * 1. Retrieve auth token from local storage and append in header if exists
 * 2. Return responseProduct BASE URL
 */
export function handlePreRequest() {
  const token =
    authenticationService.authToken() || interviewerService.authToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

/*
 * Handle request error while sending any data to API
 */
export function handleRequestError() {
  return Promise.reject(error);
}

/*
 * Handle response Success
 */
export function handleResponseSuccess() {
  return response.data;
}

/*
 * Handle response Error
 * 1. Check for 401 and 403 response code from server and logout
 */
export function handleResponseError() {
  if (error.response && [401, 403].includes(error.response.status)) {
    if (!window.location.pathname.includes('/interviewer')) {
      authenticationService.localLogout();
    } else {
      interviewerService.localLogout();
    }
  }
  return Promise.reject(
    (error && error.response && error.response.data) || error
  );
}
