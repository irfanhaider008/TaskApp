import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import store from './toolkit/store'
import  {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Posts from "./Posts";
import AntDesign from "./AntDesign";
import PrivateRouter from "./PrivateRouter";
import Header from "./Header";
import TableData from "./Table";
import Registration from "./Registration";
import JsonRender from "./Components/JsonRender";
import CRUD from "./Components/CRUD";
ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/ant" element={<AntDesign />} />
      <Route path="/post" element={<Posts />} />
      <Route path="/table" element={<TableData />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/crud" element={<CRUD/>} />



<Route element={<PrivateRouter/>}>

</Route>
      
    </Routes>
  </BrowserRouter>,
    </Provider>
    
  </React.StrictMode>,
  document.getElementById("root")
);
