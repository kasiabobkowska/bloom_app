import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from 'react-hot-toast';

import MainLayout from "../../components/MainLayout";
import { getUserProfile, updateProfile } from "../../services/index/users";
import ProfilePicture from "../../components/ProfilePicture";
import { userActions } from "../../store/reducers/userReducers";
import { useMemo } from "react";


const ProfilePage = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {
        data: profileData, 
        isLoading: profileIsLoading
    } = useQuery({
        queryFn: () => {
            return getUserProfile({ token: userState.userInfo.token })
        },
        queryKey: ['profile']
    });

    const { mutate, isLoading: updateProfileIsLoading } = useMutation({
        mutationFn: ({ name, email, password}) => {
            return updateProfile({
                token: userState.userInfo.token,
                userData: { name, email, password}
            });
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data));
            localStorage.setItem('account', JSON.stringify(data));
            queryClient.invalidateQueries(['profile']);
            toast.success('Profile updated successfully');
        },
        onError: (error) => {
            toast.error(error.message);
            console.log(error);
        },
    });


    useEffect(() => {
        if(!userState.userInfo) {
            navigate("/");
        }
    }, [navigate, userState.userInfo]);

    const {
        register,
        handleSubmit,
        formState: {errors, isValid }, 
    } = useForm({
        defaultValues: {
        name: '',
        email: '',
        password: '',
        },
        values: useMemo(() => {
            return {
                name: profileIsLoading ? "" : profileData.name,
                email: profileIsLoading ? "" : profileData.email,
            };
            }, [profileData?.email, profileData?.name, profileIsLoading]),
            mode: "onChange",
        });


    const submitHandler = (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password });
    };

    return(
        <MainLayout>
            <section className="container mx-auto px-5 py-10">
                <div className="w-full max-w-sm mx-auto">
                    <p>{profileData?.name}</p>
                    <ProfilePicture avatar={profileData?.avatar} backendUrl="http://localhost:5000" />
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="flex flex-col mb-6 w-full">
                            <label htmlFor="name" className="text-dark-third font-semibold block mt-8">
                                Name
                            </label>
                            <input type='text' 
                            id='name' 
                            {...register('name', {
                                minLength: {
                                    value: 1,
                                    message: 'Name must be at least 1 character long',
                                },
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                },
                            })}
                            placeholder='Change name'
                            className={`placeholder:text-gray-500 text-dark-third mt-3 rounded-lg px-5 py-4 fontblock outline-none border ${errors.name ? 'border-red-400' : 'border-gray-500'}`}
                            />
                            {errors.name?.message && (
                                <p className="text-xs text-red-400 mt-1">
                                    {errors.name?.message}
                                </p>
                            )}
                        </div>
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
                            placeholder='Enter new e-mail address'
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
                                New Password (optional)
                            </label>
                            <input 
                            type='password' 
                            id='password' 
                            {...register('password')}
                            placeholder='Enter your new password'
                            className={`placeholder:text-gray-500 text-dark-third mt-3 rounded-lg px-5 py-4 fontblock outline-none border ${errors.name ? 'border-red-400' : 'border-gray-500'}`} 
                            />
                            {errors.password?.message && (
                                <p className="text-xs text-red-400 mt-1">
                                    {errors.password?.message}
                                </p>
                            )}
                        </div>
                        <button type='submit' 
                            disabled={!isValid || profileIsLoading || updateProfileIsLoading}
                            className="mt-5 lg:mt-0 border-2 border-dark-first bg-dark-first text-white w-full px-6 py-2 rounded-full hover:bg-opacity-10 
                            hover:border-opacity-0 hover:text-dark-first transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            Update Profile
                        </button>
                    </form>
                </div>
            </section>
        </MainLayout>
    )
}

export default ProfilePage;