import React from 'react'

function Coin( {name, img, symbol, price, volumn} ) {
  // console.log(name, img, symbol)
  return (
    <div className='coin-container'>
        <div className='coin-row'>
            <div className='coin'>
                <img  src={img} alt='crypto'/>
                <h1>{name}</h1>
                <p className='coin-symbol'>{symbol}</p>
            </div>
            <div className='coin-data'>
                <p className='coin-price'>${price}</p>
                <p className='coin-volumn'>${volumn.toLocaleString()}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin