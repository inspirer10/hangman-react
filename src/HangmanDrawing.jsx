import React from 'react';

const HEAD = <div className='head' />;
const BODY = <div className='body' />;
const RIGHT_ARM = <div className='right_arm' />;
const LEFT_ARM = <div className='left_arm' />;
const RIGHT_LEG = <div className='right_leg' />;
const LEFT_LEG = <div className='left_leg' />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

function HangmanDrawing({ numberOfGuesses }) {
    return (
        <div className='drawing'>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className='first' />
            <div className='second' />
            <div className='third' />
            <div className='fourth' />
        </div>
    );
}

export default HangmanDrawing;
