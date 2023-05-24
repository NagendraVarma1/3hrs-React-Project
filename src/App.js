import React from 'react';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import ShowProvider from './Store/ShowProvider';
import ShowList from './Components/ShowList/ShowList';


const App = () => {
  return (
    <ShowProvider>
      <Header />
      <Form />
      <ShowList />
    </ShowProvider>
  );
}

export default App;
