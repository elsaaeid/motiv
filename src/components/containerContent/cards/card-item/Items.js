import React from 'react';
import "../Cards.css"


const cardItems = ({ item }) => {

  return (
      <div class="card d-flex justify-center align-items-center flex-column">
        <div class="card-top d-flex justify-center align-items-center flex-column">
          <div className="card-icon" style={{background: item.bg}}>
            {item.icon}
          </div>
          <div className="card-title">
            {item.title}
          </div>
        </div>
        <div class="card-bottom">
        <div className="card-chart">
           <div className='chart-pie'>{item.chart1}</div>
        </div>
        </div>
    </div>
  );
};

export default cardItems;

