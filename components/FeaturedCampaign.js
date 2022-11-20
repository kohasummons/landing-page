
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "./ui/Card";
import "swiper/css/bundle";

import styles from "../styles/FeaturedCampaign.module.css";

const CardData = require("../utils/data.json");

function FeaturedCampaign() {

  return (
    <div className={styles.featuredCampaigns}>
      <div className="container">
        <p className="banner">Featured Campaigns</p>
        <div className={styles.slidingCards}>
          <div className={styles.leftArrow}>{"<"}</div>
          <div className={styles.cardsContainer}>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              navigation={true}
              slidesPerView={3}
              loop={true}
            >
              {CardData.map((card) => (
                <SwiperSlide key={card.id}>
                  <Card
                    title={card.title}
                    image={card.image}
                    progress={card.progress}
                    amountRaised={card.amountRaised}
                    targetAmount={card.target}
                    category={card.category}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.rightArrow} >{">"}</div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCampaign;
