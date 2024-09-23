// import React, { useEffect, useCallback } from 'react';
import './App.css';

const Board = () => {

    return (
        <div className='boardContainer'>
            <div className='rowContainer'>
                <div className='boardBox'>H</div>
                <div className='boardBox'>E</div>
                <div className='boardBox'>L</div>
                <div className='boardBox'>L</div>
                <div className='boardBox'>O</div>
            </div>
            <div className='rowContainer'>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
            </div>
            <div className='rowContainer'>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
            </div>
            <div className='rowContainer'>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
            </div>
            <div className='rowContainer'>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
            </div>
            <div className='rowContainer'>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
                <div className='boardBox'></div>
            </div>
        </div>

    );
};

export default Board;