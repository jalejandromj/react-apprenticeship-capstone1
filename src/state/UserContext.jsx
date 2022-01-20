import React from 'react';

const UserContext = React.createContext({
  name: null,
  search: 'tampico alien mapaches',
  theme: true,
  setTheme: () => {},
  setSearch: () => {},
});

export default UserContext;
