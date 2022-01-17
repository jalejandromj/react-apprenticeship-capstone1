import React from 'react';

const UserContext = React.createContext({
  name: null,
  search: null,
  setSearch: () => {},
});

export default UserContext;
