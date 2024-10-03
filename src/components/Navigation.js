import React from "react";
export default function Navigation({currentPage, handlePageChange}){
    return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://juliocesardelangel.github.io/LMS//">LMS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarColor02">
          <a className={currentPage === "Home" ? "nav-link active" : "nav-link"}  href="#Home"
            onClick={()=> handlePageChange('Home')}>Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarColor02">
          <a className={currentPage === "Apps" ? "nav-link active" : "nav-link"} href="#Apps"
          onClick={()=> handlePageChange('Apps')}>Apps</a>
        </li>
        <li className="nav-item" data-bs-toggle="collapse" data-bs-target="#navbarColor02">
          <a className={currentPage === "Contact" ? "nav-link active" : "nav-link"} href="#Contact"
          onClick={()=> handlePageChange('Contact')}>Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}