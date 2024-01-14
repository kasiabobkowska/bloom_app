import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";

import MainLayout from "../../components/MainLayout";
import { login } from '../../services/index/users';
import { userActions } from "../../store/reducers/userReducers";

const LoginPage = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation({
        mutationFn: ({ email, password}) => {
            return login ({ email, password});
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });

    useEffect(() => {
        if(userState.userInfo) {
            navigate("/");
        }
    }, [navigate, userState.userInfo]);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid },
    } = useForm({
        defaultValues: {
        email: '',
        password: '',
        },
        mode: 'onChange',
    })


    const submitHandler = (data) => {
        const { email, password } = data;
        mutate({ email, password });
    };

    console.log(errors);

    return(
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="w-full max-w-sm mx-auto">
                    <h1 className="text-2xl font-lora font-semibold text-center text-dark-third">
                        Log in
                    </h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="flex flex-col mb-6 w-full">
                            <label htmlFor="email" className="text-dark-third font-semibold block mt-2">
                                E-mail
                            </label>
                            <input 
                            type='email' 
                            id='email' 
                            {...register('email', {
                                pattern: { 
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Enter a valid email address'
                                },
                                required: {
                                    value: true,
                                    message: 'Email adress is required',
                                }
                            })}
                            placeholder='Enter your e-mail address'
                            className={`placeholder:text-gray-500 text-dark-third mt-3 rounded-lg px-5 py-4 fontblock outline-none border ${errors.name ? 'border-red-400' : 'border-gray-500'}`} 
                            />
                            {errors.email?.message && (
                                <p className="text-xs text-red-400 mt-1">
                                    {errors.email?.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col mb-6 w-full">
                            <label htmlFor="password" className="text-dark-third font-semibold block mt-2">
                                Password
                            </label>
                            <input 
                            type='password' 
                            id='password' 
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: 6,
                                message: 'Password must be at least 6 characters'
                            })}
                            placeholder='Enter your password'
                            className={`placeholder:text-gray-500 text-dark-third mt-3 rounded-lg px-5 py-4 fontblock outline-none border ${errors.name ? 'border-red-400' : 'border-gray-500'}`} 
                            />
                            {errors.password?.message && (
                                <p className="text-xs text-red-400 mt-1">
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>                        <Link to='/forget-password'
                        className="text-sm text-dark-second text-dark-third">
                        Forgot your password?
                        </Link>
                        <button type='submit' 
                        disabled={!isValid || isLoading}
                        className="mt-10 lg:mt-0 border-2 border-dark-first bg-dark-first text-white w-full px-6 py-2 rounded-full hover:bg-opacity-10 
                        hover:border-opacity-0 hover:text-dark-first transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                            Sign in
                        </button>
                        <p className="text-sm text-gray-500 mt-3">
                            Don't have an account yet? <Link to='/register/' text-dark-second>Register now</Link>
                        </p>
                    </form>
                </div>
            </section>
        </MainLayout>
    )
}

export default LoginPage;
