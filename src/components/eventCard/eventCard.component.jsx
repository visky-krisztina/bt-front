import React from 'react';
import './eventCard.styles.scss';

const EventCard = (props) => {
    return (
        <div class="eventCard">
            <img src={props.eventImage} alt="event" class="eventCard-image" />

            <div class="eventCard-text">
                <h3 class="eventDate">{props.eventDate}</h3>
                    <h2 className="eventTitleStyle">{props.eventTitle}</h2>
                <p>{props.eventDescription}</p>
            </div>

      </div>
      )
}

export default EventCard;