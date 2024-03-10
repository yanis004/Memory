import React from 'react';

function Card({ item, id, handleClick }) {
    const itemClass = item.stat ? ` active ${item.stat}` : "";

    const handleClickEvent = () => {
        handleClick(id);
    };

    return (
        <div className={`card${itemClass}`} onClick={handleClickEvent}>
            <img src={item.img} alt="" />
        </div>
    );
}

export default Card;
