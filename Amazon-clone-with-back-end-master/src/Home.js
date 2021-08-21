import React from "react";
import "./Home.css";
import Product from "./Product";
import "./App.css";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import { requirePropFactory } from "@material-ui/core";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            show
            showIndicators={false}
            interval={2000}
          >
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzA3Y2M3ODkt/MzA3Y2M3ODkt-NTMyYzI0Mzct-w3000._CB668575947_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/TomorrowWar/GW-Trailer-1/TWAR_2021_GWBleedingHero_1500x600_TeaserChrisSoloNoGun_TH_Pre_en-US_ARSDE._CB668924267_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/GRFWW_GW_Desktop_MemorialDayDeals_1x-1500x600._CB661646560_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YmM4ZGRiNGQt/YmM4ZGRiNGQt-M2RjODQ5NzEt-w1500._CB669575617_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YzA3MzM4Yjgt-w1500._CB412117312_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MmY4MTZlYmMt/MmY4MTZlYmMt-MWZjMjc0MzEt-w1500._CB670025017_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
            <div>
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-MjZhZDIzYTIt-w1500._CB670370726_.jpg"
                // style={{ height: "100vh" }}
              />
            </div>
          </Carousel>
        </div>
        <div className="deal-images ">
          <div className="deal-image">
            <h4 className="title">Trending: show your stripes</h4>

            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/Y2E4YjY3ZjIt/Y2E4YjY3ZjIt-YTFiZWNlNWYt-w379._SY304_CB668210280_.jpg" />
            <a className="ab" href="#">
              shop more styles
            </a>
          </div>
          <div className="deal-image">
            <h4 className="title">Early Prime Day deals livestreamed by influencers</h4>

            <img src="https://images-na.ssl-images-amazon.com/images/G/01/poppin/AmazonLive/2021_Jan_Jun/202103_AmazonLive_CategoryCards_SheaWhitney_Desktop_1x-379x304._SY304_CB655802162_.jpg" />
            <a className="ab" href="#">
              Discover more
            </a>
          </div>

          <div className="deal-image">
            <h4 className="title">Gifts for the tech-savvy dad</h4>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/gateway/2021/May/gw_fday_phase2_05.25.21_379x304_camp4_tech_B08L48CXSZ._SY304_CB668962523_.jpg" />
            <a className="ab" href="#">
              See more
            </a>
          </div>
        </div>

        <div className="home__row hmenu-canavas-background:hmenu-dark-bkg-color">
          <div className="image1">
            <Product
              id="12321341"
              title="Chance By CHANEL for Women Eau De Parfum Spray 3.4 Ounces,clear"
              price={180.0}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51uKsofFLBL._SL1000_.jpg"
            />
            <Product
              id="67821341"
              title="METAKOO 12V Kids Ride on Car Licensed Lexus LC500,Electric Vehicle"
              price={179.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/41PAf5OcsRL._AC_SY200_.jpg"
            />

            <Product
              id="49538094"
              title="Save on ThisWorx Portable Car Vacuum and Detailing Kit"
              price={24}
              rating={4}
              image="https://m.media-amazon.com/images/I/51v3BPIZ7gL._AC_SY240_.jpg"
            />
          </div>
        </div>
        <div className="deal-images ">
          <div className="deal-image">
            <h4 className="title"> Backyard oasis</h4>

            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1326116_1675517_US_XCM_Manual_US_us_gw_pc_single_category_card_1x_us_en_3837021_1X_en_US_3839174_379x304_2X_en_US._SY304_CB669761695_.jpg" />
            <a className="ab" href="#">
              Shop Outdoor Living
            </a>
          </div>

          <div className="deal-image ">
            <h4 className="title">3 monthes for $0.99</h4>

            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/periodicals/magazines/May2021/TWP/TWP_Desktop_Cat_Card_379x304._SY304_CB668745650_.jpg" />
            <a className="ab" href="#">
              Shop now
            </a>
          </div>
          <div className="deal-image">
            <h4 className="title">Open air lounge</h4>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/Mjc5YmIxMGIt/Mjc5YmIxMGIt-ZmNiNmNkOTct-w379._SY304_CB668541086_.jpg" />
            <a className="ab" href="#">
              Shop now
            </a>
          </div>
        </div>

        <div className="main">
          <h4>
            Soak up the sun,for less <a href="#">Shop spring into summer</a>
          </h4>
          <div className="deal-images">
            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Deals_1x._CB661311486_.png"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Customers_Most_Loved_1x._CB661311486_.png"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Grilling_Outdoor_Cooking_1x._CB661311486_.png"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Outdoor_Living_1x._CB661311481_.png"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Summer_Fashion_1x._CB661311481_.png"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://images-na.ssl-images-amazon.com/images/G/01/img21/events/grfww/traffic_drivers/Desktop_bubbler_Lawn_Yard_Care_1x._CB661311481_.png"
              // style={{ height: "100vh" }}
            />
          </div>
        </div>

        <div className="home-image3">
          <h4>
            Related to items you've viewed <a href="#">See more</a>
          </h4>
          <div className="deal-images">
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/419RMwlgwrL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/5116mPGFBDL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/41pzVkQMXnL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/411ry9OiREL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />

            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/41wPW69y-JL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/41N-k9uTzGL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/51qszS+N5yL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
            <img
              className=" home__image2 "
              src="https://m.media-amazon.com/images/I/51emsltYjpL._AC_SY200_.jpg"
              // style={{ height: "100vh" }}
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Citizen, Eco-DrivePCAT Quartz Men Watch"
            price={596}
            rating={3}
            image="https://m.media-amazon.com/images/I/61r7bCI-dLL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="EIFER Portable Bluetooth Speaker Subwoofer Heavy Bass Wireless Speaker MP3"
            price={33}
            rating={5}
            image="https://m.media-amazon.com/images/I/71kUq-aZBoL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor|QHD,240hz,1000R Curved, QLED, NVIDIA G-SYNG & FreeSync|LC49G95TXZA Model"
            price={1399.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61SQz8S%2BfEL._AC_SL1000_.jpg"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;