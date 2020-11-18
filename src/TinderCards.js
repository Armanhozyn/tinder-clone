import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Mark Juckerberg",
            url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
        },
        {
            name: "Joe Biden",
            url: "https://ichef.bbci.co.uk/news/800/cpsprodpb/17D26/production/_112747579_061816473-1.jpg"
        },
    ]);
    const swiped = (dir, name) => {
        console.log("removing", name);
    }

    const outOfFrame = (name) => {
        console.log('Left screen', name);
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => { swiped(dir, person.name) }}
                        onCardLeftScreen={() => { outOfFrame(person.name) }}
                    >
                        <div style={{ backgroundImage: `url(${person.url})`,backgroundRepeat:"no-repeat" }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
