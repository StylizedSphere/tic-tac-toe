import React from 'react'
import "../css/Feed.css"
import Story from "./Story"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic=""
                message=""
                timestamp=""
                username=""
                image=""
            />
            <Post />
        </div>
    )
}

export default Feed
