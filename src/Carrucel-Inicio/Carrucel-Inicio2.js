import React, { useState } from 'react';
import "./Carrucel-Inicio.css";

<>
  
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fody Slider</title>
  <link
    rel="stylesheet"
    href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <section id="tranding">
    <div className="container">
      <h3 className="text-center section-subheading">- popular Delivery -</h3>
      <h1 className="text-center section-heading">Tranding food</h1>
    </div>
    <div className="container">
      <div className="swiper tranding-slider">
        <div className="swiper-wrapper">
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="https://i.pinimg.com/736x/63/de/11/63de11916f65b93f55a42be1904e1bbb.jpg" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-2.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Meat Ball</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-3.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$40</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Burger</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-4.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$15</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Frish Curry</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-5.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$15</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Pane Cake</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-6.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Vanilla cake</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
          {/* Slide-start */}
          <div className="swiper-slide tranding-slide">
            <div className="tranding-slide-img">
              <img src="images/tranding-food-7.png" alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$8</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Straw Cake</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                  </div>
                </h3>
              </div>
            </div>
          </div>
          {/* Slide-end */}
        </div>
        <div className="tranding-slider-control">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  </section>
</>
