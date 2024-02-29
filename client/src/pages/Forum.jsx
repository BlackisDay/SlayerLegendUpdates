import React from 'react';


const Forum = () => {

    return (
    <div className ="forum-container">
        <h1>Forum</h1>
        <p>Forum coming soon!</p>
        <div className ="forum-image">
            <img src="https://www.shutterstock.com/image-vector/coming-soon-grunge-rubber-stamp-600w-196970096.jpg" alt="forum" />
        </div>
        <div className ="forum-create"> 
         <button className ="forum-button" button="submit">Create Post</button>
        </div>
        <div className ="forum-footer">
            <p>&copy; Slayer Legends Web Updates.</p>
        </div>
    </div>
)
}


export default Forum;