import React from 'react';
import './card.styles.css';

export const Card = (props) => (
     <div className='card-container'>
          <img alt='contact' src={`https://robohash.org/${props.contact.id}?set=set1&size=140x140`}></img>
          <h3>{ props.contact.name }</h3>
          <p>{ props.contact.phone }</p>
          <p>{ props.contact.email }</p>
     </div>
);