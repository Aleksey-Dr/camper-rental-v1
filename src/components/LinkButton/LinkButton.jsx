import { Link } from 'react-router-dom';

import css from './LinkButton.module.scss';

const LinkButton = ({ path, title}) => {
    return (
        <Link to={path} className={css.link}>{title}</Link>
    );
};

export default LinkButton;