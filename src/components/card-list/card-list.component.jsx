import React from 'react';

import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
     <div className='card-list'>
          {props.contacts.map(contact => (
               <Card key={contact.id} contact={contact}/>
          ))}
     </div>
);