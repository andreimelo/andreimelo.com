import React from 'react';
import {card,card_item,card_flipback} from '../../../../../styles/components_style/card.module.css';
// import PropTypes from  'prop-types';

function Card(){
    return(
        <div className={card}>
            <div className={card_item}>
                    Hello
            </div>
            <div className={card_item}>
                    Hello
            </div>
            <div className={card_item}>
                    Hello
            </div>
        </div>
    )
}

// Card.propTypes={

// }

export default React.memo(Card);