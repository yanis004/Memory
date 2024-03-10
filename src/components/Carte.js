import React, { useState } from 'react';
import Card from './Carte';

function Cards() {
    const [items, setItems] = useState([
        { id: 1, img: '/img/apple.jpg', stat: "" },
        { id: 1, img: '/img/apple.jpg', stat: "" },
        { id: 2, img: '/img/Banana.png', stat: "" },
        { id: 2, img: '/img/Banana.png', stat: "" },
        { id: 3, img: '/img/fraise.png', stat: "" },
        { id: 3, img: '/img/fraise.png', stat: "" },
        { id: 4, img: '/img/lemon.png', stat: "" },
        { id: 4, img: '/img/lemon.png', stat: "" },
    ].sort(() => Math.random() - 0.5));

    const [prevId, setPrevId] = useState(null);
    const [matches, setMatches] = useState([]);

    function checkMatch(currentId) {
        if (prevId !== null) {
            if (items[currentId].id === items[prevId].id) {
                setMatches(prevMatches => [...prevMatches, items[currentId].id]);
            }
            setPrevId(null);
        } else {
            setPrevId(currentId);
        }
    }

    function handleClick(id) {
        if (!matches.includes(items[id].id)) {
            const newItems = [...items];
            newItems[id].stat = "active";
            setItems(newItems);
            checkMatch(id);
        }
    }

    return (
        <div className="container">
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
}

export default Cards;
