// import React from "react";
// import Router from "./shared/Router";

// const App = () => {
//   return <Router />;
// };

// export default App;

import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Form from "./features/Form";
import List from "./features/List";
import { createStore } from "redux";
import { combineReducers } from "redux";

const App = () => {

  return (
    <div style={{background:"#eee"}}>
    <Header />
    <Layout>
    <Form />
    <List/>
    </Layout>
    </div>
  );
};

export default App;