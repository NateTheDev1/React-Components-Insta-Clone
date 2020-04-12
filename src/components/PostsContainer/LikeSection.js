// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, { useState } from "react";

const LikeSection = (props) => {
  const [actionState, setAction] = useState(0);

  const handleLike = () => {
    console.log("Liking");
    if (actionState === 0) {
      props.handleLike(0);
      setAction(1);
    } else {
      props.handleLike(1);
      setAction(0);
    }
  };

  return (
    <div>
      <div className="like-section" key="likes-icons-container">
        <div className="like-section-wrapper">
          <i className="far fa-heart" onClick={handleLike} />
        </div>
        <div className="like-section-wrapper">
          <i className="far fa-comment" />
        </div>
      </div>
      <p className="like-number">{props.likes} likes</p>
    </div>
  );
};

export default LikeSection;
