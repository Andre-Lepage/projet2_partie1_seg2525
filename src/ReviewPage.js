import Navbar from "./Navbar";
import placeholder from "./assets/placeholder.png";

import ActiveChart from "./ActiveChart";
import HoursSpentChart from "./HoursSpentChart.tsx";
import ReviewList from "./ReviewList";





const ReviewPage = () => {

    const switchToReview = (event) => {
        const stats = document.getElementById("stats")
        const review = document.getElementById("review")
        stats.style.display = 'none';
        review.style.display = ''
    }

    const switchToStats = (event) => {
        const stats = document.getElementById("stats")
        const review = document.getElementById("review")
        stats.style.display = 'block';
        review.style.display = 'none'
    }

    return ( 
        <div>
            <div className="title-reviews">
                <Navbar></Navbar>
                <h1>"Game Title"</h1>
                <br></br>
                <button onClick={switchToReview} className="button-review">Review</button>
                <button onClick={switchToStats}className="button-stats">Stats</button>
            </div>

            <div id="review">
                <div className="title">
                    <h3 className="review-title"> Game Review </h3>
                </div>
                <div className="review-content">
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img className="review-image"src={placeholder}></img>  
                </div>
                <div className="review-content">
                    <img className="review-image"src={placeholder}></img>  
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="review-content">
                    <p className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                     
                </div>
                        
            </div>

            
            <div id="stats">
                <div className="title">
                    <h3 className="stats-title"> Game Stats</h3>
                </div>
                <div className="charts">
                    <div className="active-player-chart">
                        <h4>Active Monthly Players</h4>
                        <ActiveChart></ActiveChart>
                    </div>
                    <div className="active-player-chart">
                        <h4>Hours Spent on Game After Buying</h4>
                        <HoursSpentChart></HoursSpentChart>
                    </div>
                </div>
            </div>

            <div className="comments">
                <div className="title">
                    <h3 className="community-title">Comments</h3>
                    <ReviewList></ReviewList>
                </div>
            </div>

        </div>
        );
        
}
 
export default ReviewPage;