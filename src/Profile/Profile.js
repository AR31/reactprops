import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  console.log(`props:`, props);
  return (
    <div>
      <div className="container-full-name">
        <span
          className="full-name"
          style={{ fontSize: 16, fontWeight: 700, color: "red" }}
        >
          {props.fullName}
        </span>
      </div>
      <div className="container-bio">
        <span
          className="bio"
          style={{ fontSize: 16, fontWeight: 700, color: "blue" }}
        >
          {props.bio}
        </span>
      </div>
      <div className="container-img">
        <img src={props.children} style={{ width: 300, height: 200 }} alt="" />
      </div>
      <div className="container-profession">
        <span
          className="profession"
          style={{ fontSize: 16, fontWeight: 700, color: "blue" }}
        >
          {props.profession}
        </span>
      </div>
      <button
        onClick={() => props.handleName(props.fullName)}
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "transparent",
          width: 70,
          height: 30,
        }}
      >
        ClickMe
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: "inconnu",
  bio: "inconnu",
  profession: "inconnu",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
