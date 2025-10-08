import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.heading}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li>
                            <div className="form-check form-switch ms-3">
                                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode.charAt(0).toUpperCase()+props.mode.substring(1)} Mode</label>
                            </div>
                        </li>
                        <li>
                            <div className="form-check form-switch ms-3">
                                <input className="form-check-input" onClick={props.toggleCherryMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                                <label className="form-check-label" htmlFor="switchCheckDefault">Cherry Mode</label>
                            </div>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {navTitle: PropTypes.string.isRequired};
Navbar.defaultPrototypes = {navTitle: "Menu Nav"};