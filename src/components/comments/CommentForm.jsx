import React, { useState } from 'react'

const CommentForm =({ btnLabel, formSubmitHandler, formCancelHandler = null, initialText =""  }) => {
const [value, setValue] = useState(initialText)

    const submitHandler = (e) => {
        e.preventDefault();
        formSubmitHandler(value);
        setValue('');
    };
    return (
        <form onSubmit={submitHandler}>
            <div className="flex flex-col items-end border mt-10 border-dark-first border-opacity-40 rounded-lg p-4">
                <textarea 
                    className="w-full focus:outline-none bg-transparent" 
                    placeholder="Leave your comment here" 
                    rows="5"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className='flex items-center gap-x-2 pt-2'>
                    {formCancelHandler && (
                        <button 
                        onClick={formCancelHandler}
                        className='px-6 py-2.5 rounded-full border border-red-400 text-red-400 hover:bg-red-400 hover:text-white'>
                            Cancel
                        </button>
                    )}
                    <button 
                        type="submit" 
                        className='mx-auto flex items-center gap-x-2 border-2 border-dark-first bg-dark-first
                        text-white px-6 py-2 rounded-full hover:bg-opacity-10 hover:border-opacity-0
                        hover:text-dark-first transition-all duration-300'>
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CommentForm;