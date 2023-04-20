import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

import Button from "../ui/Button/Button";
import styles from './Order.module.scss';

export default function Order() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = data => console.log(data);

    return (
        <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group mb-3">
                    <label htmlFor="fullName">Enter your Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder='Enter your name'
                        className={`${styles.control} form-control`}
                        {...register('fullName', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[ A-Za-z]*$/,
                                message: 'Please enter a valid name'
                            }
                        })} />
                    {errors.fullName && <div className={styles.invalid}>{errors.fullName?.message}</div>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="address">Enter your Address</label>
                    <input
                        type="text"
                        id="address"
                        className={`${styles.control} form-control`}
                        placeholder='Enter your address'
                        {...register('address', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[ A-Za-z]*$/,
                                message: 'Please enter a valid address'
                            }
                        })} />
                    {errors.address && <div className={styles.invalid}>{errors.address?.message}</div>}
                </div>


                <div className="form-group mb-3">
                    <label htmlFor="mobile">Enter your phone</label>
                    <PhoneInput
                        country={'eg'}
                        value={watch().mobile}
                        containerClass={styles.phoneContainer}
                        buttonClass={styles.countryBtn}
                        inputProps={{
                            ...register('mobile', {
                                required: 'This field is required',
                                minLength: {
                                    value: 9,
                                    message: 'Please enter a valid mobile phone'
                                }
                            })
                        }} />
                    {errors.mobile && <div className={styles.invalid}>{errors.mobile?.message}</div>}
                </div>

                <div className="form-group mb-5">
                    <label htmlFor="email">Enter your Email</label>
                    <input
                        type="email"
                        id="email"
                        className={`${styles.control} form-control`}
                        placeholder='Enter your email'
                        {...register('email', {
                            required: 'This field is required',
                            pattern: {
                                value: /^[ A-Za-z]*@[ A-Za-z]*/,
                                message: 'Please enter a valid email'
                            }
                        })} />
                    {errors.email && <div className={styles.invalid}>{errors.email?.message}</div>}
                </div>
                <div className="d-flex justify-content-between">
                    <Button type="submit">Submit</Button>
                    <Button type="button" onClick={() => router.push('/cart')}>Back to cart</Button>
                </div>
            </form>
        </div>
    )
}