import React from 'react';
import Star from './Star';
import User from './images/user.png';

export default function Favorite() {
  const [contact, setContact] = React.useState({
    firstName: 'Rick',
    lastName: 'Wilson',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  });

  // let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggleFavorite() {
    // setContact((prevContact) => {
    //   return {
    //     ...prevContact,
    //     isFavorite: !prevContact.isFavorite,
    //   };
    // });
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className='card'>
        <img src={User} alt='' className='card--image' />
        <div className='card--info'>
          {/* <img
            src={`../images/${starIcon}`}
            className='card--favorite'
            alt=''
            onClick={toggleFavorite}
          /> */}
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className='card--name'>
            {contact.firstName} {contact.lastName}
          </h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
