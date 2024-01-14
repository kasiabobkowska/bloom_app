import React, { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { getCommentsData } from "../../data/comments";


const CommentsContainer = ({className, loggedInUserId}) => {
    const [comments, setComments] = useState([]);
    const mainComments = comments.filter((comment) => comment.parent === null)
    const [affectedComment, setAffectedComment] = useState(null);

    console.log(comments);

    useEffect(() => {
        (async() => {
            const commentData = await getCommentsData();
            setComments(commentData);
        })()
    }, []);

    const addCommentHandler =( value, parent = null, replyOnUser = null) => {
        const newComment =     {
            _id: "10",
            user: {
                _id: "a",
                name: "Mohammad Rezaii",
            },
            desc: "it was a nice post, Thank you!",
            post: "1",
            parent: parent,
            replyOnUser: replyOnUser,
            createdAt: "2022-12-31T17:22:05.092+0000",
            };
            setComments((curState) => {
                return [newComment, ...curState];
            });
            setAffectedComment(null);
    };

    const updateCommentHandler = (value, commentId) => {
        const updatedComments = comments.map((comment) => {
            if(comment._id === commentId) {
                return {...comment, desc: value};
            }
            return comment;
        });
        setComments(updatedComments);
        setAffectedComment(null)
    }

    return (
        <div className={`${className}`}>
            <CommentForm  
            btnLabel="Send" 
            formSubmitHandler={(value => addCommentHandler(value))}/>
            <div className="space-y-4 mt-8">
                {mainComments.map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment} 
                        loggedInUserId={loggedInUserId}
                        affectedComment={affectedComment}
                        setAffectedComment={setAffectedComment}
                        addComment={addCommentHandler}
                        updateComment={updateCommentHandler}
                    />  
                ))}
            </div>
        </div>
    )
}

export default CommentsContainer;