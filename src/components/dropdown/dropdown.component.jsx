import React, { useState } from 'react';
import { NavItems } from '../../data/NavItems';
import './dropdown.styles.scss';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);


  return (
    <>
      <ul
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {NavItems.map((item, index) => {
          return (
            <div key={index}>

            {item.subMenu?.map((c, i) => (
              <li key={i}>
                <Link
                  className={c.scName}
                  to={c.sPath}
                  onClick={() => setClick(false)}
                >
                  {c.sTitle.toUpperCase()}
                </Link>              
              </li>
              ))}

            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;