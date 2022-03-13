import React from 'react';
import {images, data} from "../../constants"
import './SpecialMenu.css';
import { SubHeading, MenuItem } from '../../components';

const SpecialMenu = () => (
  <div className='app__specialmenu flex__center section__padding' id='menu'>
    <div className="app__specialmenu-title">
      <SubHeading title="Menu That Fits Your Palette"/>
      <h2 className="headtext__cormorant">Today's Special</h2>
    </div>

    <div className="app__specialmenu-menu">
      <div className="app__specialmenu-menu_wine flex__center">
        <p className='app__specialmenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialmenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title ={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialmenu-menu_img">
        <img src={images.menu} alt="" />
      </div>

      <div className="app__specialmenu-menu_cocktails flex__center">
        <p className='app__specialmenu-menu_heading'>Cocktails</p>
        <div className="app__specialmenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
             <MenuItem key={cocktail.title + index} title ={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: "15px"}}>
      <button type='button' className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
