import { useState } from "react";

const data = [
    { title: "I agree 100%", body: "The thing you said about lorum ipsum is whet I`ve been telling all my friends. the review was perfect ", authorName: "Playhis Alat" },
    { title: "you`re a little off on this one", body: "I see what you`re saying about dolor sit amet but that just doesent make sense. please check out the aute irure dolor feature", authorName: "Prog Amer" },
    
  ];


  
const ReviewList = () => {
    const [reviewList, setReviewList] = useState(data);

    const addReview = (event) => {
        setComment("");
        setName("")
        setTitle("")
        var updatedReviews = [...reviewList];
        var newReview = {title: commentTitle, body: comment, authorName: name }
        updatedReviews.push(newReview);
        setReviewList(updatedReviews);
    }

const [name, setName] = useState('');
const [commentTitle, setTitle] = useState('');
const [comment, setComment] = useState('');

const handleNameChange = (event) => {
    setName(event.target.value);
  };

const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

    return ( 
        <div className="title">
            <div className="review-list">
                {reviewList.map((item, index) => (
                    <div className="review-item" key={index}>
                        <div className="community-review-title">
                            <h5>  Title: {item.title} ‎ ‎ ‎ ‎ Author: {item.authorName}</h5>
                        </div>
                        
                        <p>{item.body}</p>

                    </div>
                )
                )}
            </div>
            <div className="addReview">
                
                    <h4 className="add-comment">Add a comment</h4>
                    <div className="name-title">
                        <div className="name-component">
                            <label className="comment-label" for="comment-name ">Name:</label><br/>
                            <input type="text" id="comment-name" name="comment-name" required value={name} onChange={handleNameChange} /><br/>
                        </div>
                        <div>
                            <label className="comment-label" for="comment-title-input">Comment Title:</label><br/>
                            <input type="text" id="comment-title-input" name="comment-title-input" required value={commentTitle} onChange={handleTitleChange}/><br/><br/>
                        </div>

                    </div>
                    <div className="name-title">
                        
                        <div className="comment-component">
                            <label className="comment-label align-left" for="comment">Type out your comment here</label>
                            <textarea rows="5" id="comment" name="comment" required value={comment} onChange={handleCommentChange} ></textarea>
                            <input className="submit" type="submit" value="Submit" onClick={addReview}/>
                        </div>
                        
                    </div>
                    
                
            </div>
        </div>
        
        
     );
}
 
export default ReviewList;