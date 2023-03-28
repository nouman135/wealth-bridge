import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <>
    <div className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1>Welcome to Wealth Management App</h1>
          <p>Where our Relationship Managers share their wealth management strategies and insights.</p>
        </div>
      </div>
    </div>
  </div>
  
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="text-center">Welcome to Wealth Bridge</h1>
        <p className="lead">We are a wealth management firm that provides expert financial advice and personalized solutions to help you achieve your financial goals.</p>
        <p>Our team of experienced relationship managers are here to provide you with a range of services including investment management, retirement planning, estate planning, and more.</p>
        <p>We believe that wealth management is more than just managing your money - it's about building long-term relationships based on trust and mutual respect.</p>
      </div>
      <div className="row" style={{display:'flex',justifyContent:'center'}}>
        <h2 className="text-center">Latest Insights</h2>
        <div className="card mx-3 col-md-5">
          <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Investing in Emerging Markets</h5>
            <p className="card-text">Learn more about the potential benefits and risks of investing in emerging markets.</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
        <div className="card mx-3 col-md-5">
          <img src="https://via.placeholder.com/350x200" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Planning for Retirement</h5>
            <p className="card-text">Discover the different strategies for planning your retirement and ensuring financial security.</p>
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="feature">
            <h2>Expertise</h2>
            <p>Our Relationship Managers have decades of experience in wealth management and are dedicated to helping you achieve your financial goals.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="feature">
            <h2>Strategy</h2>
            <p>We work with you to develop a customized wealth management strategy that takes into account your unique financial situation and goals.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="feature">
            <h2>Insights</h2>
            <p>Our Relationship Managers share their insights and perspectives on the markets, investments, and wealth management strategies to</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  
  <div className="cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2>Ready to get started?</h2>
          <p>Sign up today to schedule a consultation with one of our Relationship Managers and start your journey to financial success.</p>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
  
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p>&copy; 2023 Wealth Management App. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
        </>  
  )
}
