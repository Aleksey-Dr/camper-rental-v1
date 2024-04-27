import MainContent from 'components/MainContent';
import SideBar from 'components/SideBar';

import css from './Catalog.module.scss';

const Catalog = () => {
    return (
        <div className={css.wrapper}>
            <SideBar />
            <MainContent />
        </div>
    );
};

export default Catalog;