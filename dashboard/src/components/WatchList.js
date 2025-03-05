import React, {useState, useContext} from 'react';

import axios from "axios";

import GeneralContext from './GeneralContext';

import {Tooltip} from '@mui/material';

import {KeyboardArrowUp, KeyboardArrowDown, BarChartOutlined, MoreHorizOutlined} from  "@mui/icons-material";

import { watchlist } from '../data/data';


const WatchList = () => {
    return ( 
        <div class='watchlist-container'>
            <div class='search-container'>
                <input type='text' name='search' id='search' placeholder='Search eg: infy, bse, nifty fut weekly, gold mcx' class='search'/>
                <span class='counts'> {watchlist.length} / 50 </span>
            </div>

            <ul class='list'>
                {watchlist.map((stock,index)=>{
                       return <WatchListItem stock={stock} key={index} />;
                })} 
            </ul>
        </div>
     );
}

export default WatchList;

const WatchListItem = ({stock}) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = (e)=>{
        setShowWatchlistActions(true);
    }

    const handleMouseLeave = (e)=>{
        setShowWatchlistActions(false);
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div class='item'>
                <p class={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div class='itemInfo'>
                    <span class='percent'>{stock.percent}</span>
                    {stock.isDown ? 
                    (<KeyboardArrowDown className='down'/>) : 
                    (<KeyboardArrowUp className='up'/>) }

                    <span class='price'>{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} />}
        </li>
    )
}

const WatchListActions = ({uid}) => {

    const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };


    return(
        <span className='actions'>
            <span>
                <Tooltip title='Buy (B)' placement='top' arrow={true} onClick={handleBuyClick}>
                    <button className='buy'>Buy</button>
                </Tooltip>

                <Tooltip title='Sell (S)' placement='top' arrow={true}>
                    <button className='sell'>Sell</button>
                </Tooltip>

                <Tooltip title='Analytics (A)' placement='top' arrow={true}>
                    <button class='action'>
                        <BarChartOutlined className='icon'/>
                    </button>
                </Tooltip>

                <Tooltip title='More' placement='top' arrow={true}>
                    <button class='action'>
                        <MoreHorizOutlined className='icon'/>
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}