// import React from 'react'

const PromoCode = () => {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo-in">
          <p className="text">
            Promo kodunuz var? <span>Endirimdən istifadə edin!</span>
          </p>
          <div className="code">
            <input type="text" placeholder="Promo kodu daxil edin" />
            <button>OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoCode;
