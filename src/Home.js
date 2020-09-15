import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg" alt=""/>
            </div>

            <div className="home__row">
            <Product 
            id='1'
            title='Expert Secrets'
            price={29.99}
            image={'https://m.media-amazon.com/images/I/71vJlsZeD0L._AC_UY436_FMwebp_QL65_.jpg'}
            rating={5}/>
                <Product 
             id='2'   
            title='HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor'
            price={29.99}
            image={'data:image/webp;base64,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'}
            rating={5}/>
            </div>

            <div className="home__row">
            <Product 
            id='3'
            title='Instant Pot Duo Nova Pressure Cooker 7 in 1'
            price={29.99}
            image={'https://m.media-amazon.com/images/I/71A3oxSQ5rL._AC_UL640_FMwebp_QL65_.jpg'}
            rating={5}/>
                <Product 
            id='4'
            title='HP 62XL | Ink Cartridge | Black | C2P05AN'
            price={29.99}
            image={'https://m.media-amazon.com/images/I/71kttcx+P0L._AC_UY436_FMwebp_QL65_.jpg'}
            rating={5}/>
        
                <Product 
                id='5'
            title='Michael Kors Bedford Cross Body'
            price={29.99}
            image={'https://m.media-amazon.com/images/I/91-LL7wce0L._AC_UL640_FMwebp_QL65_.jpg'}
            rating={5}/>
                
            </div>
            <div className="home__row">
            <Product 
            id='6'
            title='Nintendo Switch 32GB Console'
            price={29.99}
            image={'https://images-na.ssl-images-amazon.com/images/I/417kf2GJBuL._AC_US436_FMwebp_QL65_.jpg'}
            rating={5}/>
               
            </div>
        </div>
    )
}

export default Home
