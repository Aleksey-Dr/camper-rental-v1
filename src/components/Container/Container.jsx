import css from './Conainer.module.scss';

const Container = ({ children }) => {
    return (
        <div className={css.container}>{ children }</div>
    );
};

export default Container;