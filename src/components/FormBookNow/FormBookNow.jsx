import css from './FormBookNow.module.scss';

const FormBookNow = () => {
    return (
        <form className={css.form}>
            <h3 className={css['form-title']}>Book your campervan now</h3>
            <p className={css['form-description']}>
                Stay connected! We are always ready to help you.
            </p>
            <div className={css['form-wrapper']}>
                <input
                    type='text'
                    id='name'
                    placeholder=' '
                    required
                    className={css['form-input']}
                />
                <label htmlFor='name' className={css['form-label']}>
                    Name
                </label>
            </div>
            <div className={css['form-wrapper']}>
                <input
                    type='email'
                    id='email'
                    placeholder=' '
                    required
                    className={css['form-input']}
                />
                <label htmlFor='email' className={css['form-label']}>
                    Email
                </label>
            </div>
            <div className={css['form-wrapper']}>
                <input
                    type='text'
                    id='date'
                    placeholder=' '
                    required
                    className={css['form-input']}
                />
                <label htmlFor='date' className={css['form-label']}>
                    Booking date
                </label>
            </div>
            <div className={css['form-wrapper-textarea']}>
                <textarea
                    type='text'
                    name='comment'
                    placeholder=' '
                    className={css['form-textarea']}
                />
                <label
                    htmlFor='comment'
                    placeholder=' '
                    className={css['form-label']}
                >
                    Comment
                </label>
            </div>
            <button type='submit' className={css['form-btn']}>
                Send
            </button>
        </form>
    );
};

export default FormBookNow;
