import React from 'react'
import "../css/Story.css"
import {Avatar} from "@material-ui/core";

function Story({image, profileSrc, title}) {
    return (
        <div className="story">
            <Avatar />
            Story
        </div>
    )
}

export default Story
