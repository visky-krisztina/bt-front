import React from 'react';
import './event2.styles.scss';

const EventCard2 = (props) => {
    return (
        <div className="eventContainer">
            <div className="dateContainer">
                <div>
                    <h3>{props.eventDateMonth}</h3>
                    <h1>{props.eventDateDay}</h1>
                </div>
                <div className='eventDateTimeStyle'>
                    <h4>{props.eventDateTime}</h4>
                </div>
            </div>

            <div class="imageContainer">
                <img src={props.eventImage} alt="" />

                <div class="imageContainer-s">
                    <h2>{props.eventTitle}</h2>
                    <p>{props.eventDescription}</p>

                </div>
                </div>


        </div>
        )
}

export default EventCard2;