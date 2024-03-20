import React, { useState } from 'react';


function Forum() {
  const [currentThread, setCurrentThread] = useState('');
  const [subforumVisible, setSubforumVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');

  const handleThreadClick = (thread) => {
    setCurrentThread(thread);
    setSubforumVisible(true);
  };

  const handleBackClick = () => {
    setCurrentThread('');
    setSubforumVisible(false);
  };

  const handleCreatePost = () => {
    // Add code to handle creating a post in the subthread
    console.log(`New post in ${currentThread} subthread: ${newPostContent}`);
    // Clear the input field after creating the post
    setNewPostContent('');
  };

  return (
    <div className="forum-container">
      <div className="main-threads">
        <h2>Main Threads</h2>
        <ul>
          <li onClick={() => handleThreadClick('Resources')}>Resources</li>
          <li onClick={() => handleThreadClick('Technical Support')}>Technical Support</li>
          <li onClick={() => handleThreadClick('Updates')}>Updates</li>
          <li onClick={() => handleThreadClick('Videos and Images')}>Videos and Images</li>
        </ul>
      </div>
      {subforumVisible && (
        <div className="sub-threads">
          <button onClick={handleBackClick} className="back-button">Back</button>
          <h3>{currentThread} Sub Threads</h3>
          <div className="create-post">
            <input
              type="text"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Enter your post content"
            />
            <button onClick={handleCreatePost} className="create-post-button">Create Post</button>
              
          </div>
        </div>
      )}
    </div>
  );
}

export default Forum;