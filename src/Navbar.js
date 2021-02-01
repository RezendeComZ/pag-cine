const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">PagCine</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"><i className="fas fa-map-marker-alt fa-lg" />São Paulo
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-film" />Programação</a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Em cartaz</a>
              <a className="dropdown-item" href="#">Em breve</a>
              <a className="dropdown-item" href="#">Em exibição</a>
              <div class="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Lista de filmes</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-video" />Trailers</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Cinemas, Filmes, Salas..." />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
        </form>
        <li className="nav-item">
          <a className="nav-link" href="#"><i className="fas fa-user" />Login</a>
        </li>
      </div>
    </nav>
  );
}
 
export default Navbar;