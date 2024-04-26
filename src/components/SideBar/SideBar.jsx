import FormLocation from 'components/FormLocation';
import Filter from 'components/Filter';

import css from './SideBar.module.scss';

const SideBar = () => {
    return (
        <div className={css['side-bar']}>
            <FormLocation />
            <Filter />
        </div>
    );
};

export default SideBar;