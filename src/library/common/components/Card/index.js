import React from 'react';
import {card,card_item,card_flipback} from '../../../../../styles/components_style/card.module.css';
import { STRINGS } from '../../constants/strings';
// import PropTypes from  'prop-types';

function Card(){
    return(
        <div className={card}>
            <div className={card_item}>
                <h3>{STRINGS.WHATIDO.JAVASCRIPT}</h3>
                <span>{STRINGS.WHATIDO.JSCONTENT}</span>
            </div>
            <div className={card_item}>
                <h3>{STRINGS.WHATIDO.FRONTEND}</h3>
                <span>{STRINGS.WHATIDO.FECONTENT}</span>
            </div>
            <div className={card_item}>
                <h3>{STRINGS.WHATIDO.DESIGNING}</h3>
                <span>{STRINGS.WHATIDO.DSCONTENT}</span>
            </div>
        </div>
    )
}

// Card.propTypes={

// }

export default React.memo(Card);