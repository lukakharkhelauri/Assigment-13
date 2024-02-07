import React from 'react';
import { Link } from 'react-router-dom';
import classes from './module/index.module.scss';
import Databiz from '../images/client-databiz.svg';
import Marker from '../images/client-maker.svg';
import Meet from '../images/client-meet.svg';
import Audiophile from '../images/client-audiophile.svg';
import MainImage from '../images/image-hero-desktop.png';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes['home-left']}>
        <h1>Make Remote Work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <Link to="/learn-more" className={classes['learn-more-button']}>
          Learn More
        </Link>

        <div className={classes['clients']}>
        <img src={Databiz} alt="Databiz" className={classes['client-logo']} />
        <img src={Marker} alt="Marker" className={classes['client-logo']} />
        <img src={Meet} alt="Meet" className={classes['client-logo']} />
        <img src={Audiophile} alt="Audiophile" className={classes['client-logo']} />
      </div>
      </div>

      <div className={classes['home-right']}>
        <img src={MainImage} alt="Main Image" className={classes['main-image']} />
      </div>
    </div>
  );
};

export default Home;
