import React from "react";
const images = require.context('../pfpImage', true);
const imageList = images.keys().map(image => images(image));
function ShowComments({commentData, userData,picCount}){
    console.log(commentData)
    return(
        <div className="showCommentContainer">
            <img/>
            {commentData.map((element, index) => (
                <div className={`indvComments ${(element.postId) == picCount ? 'shown':'hidden'}`} key={index}>
                    <div>
                        <img src={imageList[element.authorId-1]} className="pfp" width={50}/>
                        <p>{commentData[element.authorId].author} <span>{commentData[element.authorId].createdAt}</span></p>
                    </div>
                    <p className={`comment${index+1}`}>{element.content}</p>
                </div>
            ))}
        </div>

    )
}

export default ShowComments;