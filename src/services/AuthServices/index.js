const login = (payload) => {
   
  const apiUrl = 'http://localhost:3500/customers/login';

  const result = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  return result;
};

const register = async (payload) => {
  const apiUrl = 'http://localhost:3500/customers/register';

  const result = fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { error: error.message };
    });
  return result;
};

export const authenticationService = {
  login,
  register,
};
