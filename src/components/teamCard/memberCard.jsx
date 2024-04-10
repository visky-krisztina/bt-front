import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import './memberCard.scss';

const MemberCard = (props) => {
  const { name, job, image, text, email, mobil } = props.person;

  return (
    <div className='memberCard'>
      {
        props.contactPage === 'contactPage' 
        
        ? 
          <>
            <div className='img-container'>
              <img src={image} alt={name} className='person-img'/>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{email}</p>
            <p className='info'>{mobil}</p>
          </>
        :
        <>      
          <div className='img-container'>
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
        </>

    }
    </div>
  )
};

export default MemberCard;
