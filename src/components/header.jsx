import { useState } from 'react';
import { Rotate as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <header>
                <div>
                    <h1>Janka</h1>
                </div>

                {/* Ajoutez le bouton du hamburger à l'extérieur du header */}
                <div className="hamburger-container">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </header>

            {/* Déplacez le menu à l'extérieur du header */}
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <div>
                    <Link to={'/portfolio'}>Home</Link>
                    <Link to={'/portfolio/project'}>Project</Link>
                    <Link to={'/portfolio/project'}>About me</Link>
                </div>
            </nav>
        </>
    );
}

export default Header;
