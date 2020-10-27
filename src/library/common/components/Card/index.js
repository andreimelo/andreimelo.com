import React from 'react';
import { card,card_item,card_icon } from '../../../../../styles/components_style/card.module.css';
import { STRINGS } from '../../constants/strings';
import { IMAGES } from '../../constants/images';

function Card(){
    return(
        <div className={card}>
            <div className={card_item}>
                <img src={IMAGES.JAVASCRIPT} className={card_icon} alt="whatIdoIcon"/>
                <h3>{STRINGS.WHATIDO.JAVASCRIPT}</h3>
                <span>{STRINGS.WHATIDO.JSCONTENT}</span>
            </div>
            <div className={card_item}>
                <img src={IMAGES.FRONTEND} className={card_icon} alt="whatIdoIcon"/>
                <h3>{STRINGS.WHATIDO.FRONTEND}</h3>
                <span>{STRINGS.WHATIDO.FECONTENT}</span>
            </div>
            <div className={card_item}>
                <img src={IMAGES.DESIGN} className={card_icon} alt="whatIdoIcon"/>
                <h3>{STRINGS.WHATIDO.DESIGNING}</h3>
                <span>{STRINGS.WHATIDO.DSCONTENT}</span>
            </div>
        </div>
    )
}

export default React.memo(Card);