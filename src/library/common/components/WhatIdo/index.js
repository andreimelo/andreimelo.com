import React from 'react';
import {STRINGS} from '../../constants/strings';
import Card from '../Card';

function WhatIdo(){
    return(
        <section id={STRINGS.NAVIGATION_DATA[2]}>
            <h2>{STRINGS.NAVIGATION_DATA[2]}</h2>
            <Card/>
        </section>
    )
}

export default WhatIdo