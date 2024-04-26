
import css from './FormLocation.module.scss';

const FormLocation = () => {
    return (
        <form className={css.form}>
            <label htmlFor="" className={css.label}>Location</label>
            <input
                type="text"
                className={css.input}
            />
        </form>
    );
};

export default FormLocation;