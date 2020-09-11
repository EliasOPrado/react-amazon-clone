import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo'
            // link for the amazon logo
             src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
             />
            {/* add the search form */}
             <div className="header__search">
            <input 
            type="text" 
            className="header__serachIn"
            />
            <div className="header__nav">

                {/* the three options like signin/orders/prime.. */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineOne">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineOne">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                       Your
                    </span>
                    <span className="header__optionLineOne">
                       Prime
                    </span>
                </div>
            </div>

            {/* logo */}
            
             </div>
        </div> 
    )
}

export default Header
