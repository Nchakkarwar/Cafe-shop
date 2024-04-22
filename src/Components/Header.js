// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMugHot } from '@fortawesome/free-solid-svg-icons';


// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">
//                 <a href="#">coffee <i className="fas fa-mug-hot"></i></a>
//             </div>

//             <nav className="navbar">
//                 <a href="#home">home</a>
//                 <a href="#about">about</a>
//                 <a href="#menu">menu</a>
//                 <a href="#review">review</a>
//                 <a href="#book">book</a>
//             </nav>

//             <a href="#" className="btn">book a table</a>
//         </header>
//     );
// }

// export default Header;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <header className="header">
            <div id="menu-btn">
                <FontAwesomeIcon icon={faMugHot} />
            </div>
            <a href="#" className="logo">coffee <FontAwesomeIcon icon={faMugHot} /></a>
            <nav className="navbar">
                <a href="#home">home</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">review</a>
                <a href="#book">book</a>
            </nav>
            <a href="#" className="btn">book a table</a>
        </header>
    );
}

export default Header;
