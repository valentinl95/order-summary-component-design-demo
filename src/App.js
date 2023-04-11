import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img className="illustration" src="/illustration-hero.svg" alt="Person listening to the music in headphones" />
        <div className="content">
          <header class="header">Order Summary</header>
          <span className="description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</span>
          <div className="order_content">
            <div className="plan_and_icon">
              <img className="music_icon" src="/icon-music.svg" alt=""></img>
              <div className="info">
                <div className="annual_plan">
                  <span className="annual_plan_text">Annual Plan</span>
                </div>
                <div className="price">
                  <span className="price_text">$59.99/year</span>
                </div>
              </div>
            </div>
            <div className="change">
              <span className="change_text">Change</span>
            </div>
          </div>
          <div className="proceed_to_payment">
            <span className="proceed_to_payment_text">Proceed to Payment</span>
          </div>
          <div className="cancel_order">
            <span className="cancel_order_text">Cancel Order</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
