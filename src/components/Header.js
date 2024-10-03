import React, { Fragment } from "react";
import { useState } from "react";
import Navigation from "./Navigation";
import Home from './pages/Home'
// import Apps from "./pages/Apps";

export default function Header(){

    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Apps') {
          return <Home />;
        }
        if (currentPage === 'Contact') {
          return <Home />;
        }
        return <Home />;
      };

      const handlePageChange = (page) => setCurrentPage(page);

    return (
      <Fragment>
        <header className="header">
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
        <body className="container">
          <div>{renderPage()}</div>
        </body>        
      </Fragment>
    );
}