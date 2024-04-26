import css from './Button.module.scss';

const Button = ({ title }) => {
    return (
        <button className={css.btn}>{ title }</button>
    );
};

export default Button;