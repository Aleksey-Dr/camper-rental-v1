import { NavLink } from 'react-router-dom';

import Section from 'components/Section';

import IMAGES from 'images/homePage';

import css from './Home.module.scss';

const Home = () => {
    return (
        <Section>
            <div className={css.wrapper}>
                <img width='680' src={IMAGES.sunAndBus} alt="Bus under the Sun" />
                <NavLink to='/catalog' className={css['nav-link']}>Catalog</NavLink>
            </div>
        </Section>
    );
};

export default Home;