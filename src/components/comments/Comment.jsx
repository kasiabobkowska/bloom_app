import React from "react";
import images from "../../constants/images.js";

import { FiMessageSquare, FiEdit2, FiTrash } from 'react-icons/fi';
import CommentForm from "./CommentForm.jsx";

const Comment = ({ comment, loggedInUserId, affectedComment, setAffectedComment, addComment, parentId = null, updateComment }) => {
    const isUserLoggedIn = Boolean(loggedInUserId);
    const commentBelongsToUser = loggedInUserId === comment.user._id;
    const isReplying = 
        affectedComment && 
        affectedComment.type === 'replying' && 
        affectedComment._id === comment._id;
    const isEditing = 
        affectedComment && 
        affectedComment.type === 'editing' && 
        affectedComment._id === comment._id;
    const repliedCommentId = parentId ? parentId : comment._id;
    const replyOnUserId = comment.user._id;

    return (
        <div className='flex flex-nowrap items-start gap-x-3 bg-[#F3F7F3] bg-opacity-70 p-3 rounded-lg'>
            <img 
                src={images.author1} 
                alt='user profile' 
                className="rounded-full w-10 object-cover object-center h-10"
            />
            <div className="flex-1 flex flex-col">
                <h5 className=" text-dark-third text-xs font-lora">
                    {comment.user.name}
                </h5>
                <span className="text-xs opacity-80">
                    {new Date(comment.createdAt).toLocaleDateString("en-US",{
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                        hour: '2-digit',
                    })}
                </span>
                {!isEditing && (
                    <p className="font-opensans mt-[10px] opacity-80 text-sm text-dark-third">
                        {comment.desc}
                    </p>
                )}
                {isEditing && (
                    <CommentForm
                        btnLabel="Update"
                        formSubmitHandler={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText={comment.desc}
                    />
                )}
                <div className="flex items-center gap-x-3 text-xs mt-3 mb-3">
                    {isUserLoggedIn && (
                        <button className="flex items-center space-x-2" onClick={() => setAffectedComment({type: 'replying', _id: comment._id})}>
                            <FiMessageSquare className="w-4 h-auto"/>
                            <span>Reply</span>
                        </button>
                    )}
                    {commentBelongsToUser && (
                        <>
                            <button 
                                className="flex items-center space-x-2"
                                onClick = {() => 
                                    setAffectedComment({ type: ' editing', _id:comment._id})
                                    }
                                >
                                <FiEdit2 className="w-4 h-auto"/>
                                <span>Edit</span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <FiTrash className="w-4 h-auto"/>
                                <span>Delete</span>
                            </button>
                        </>
                    )}
                </div>
                {isReplying && <CommentForm btnLabel="Reply" formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                formCancelHandler={() => setAffectedComment(null)}/>}
            </div>
        </div>
    );
};

export default Comment;