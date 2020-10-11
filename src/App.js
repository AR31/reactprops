import React from "react";
import "./App.css";
import Profile from "./Profile/Profile";

import ProfilPhotoImg from "./ProfilePhoto.jpg";

function App() {
  const handleName = (name) => alert(name);
  const profession = 44;
  return (
    <div className="App">
      <Profile
        fullName="arwa khlifi"
        bio="ingenieur developeur full stack "
        profession={profession}
        handleName={handleName}
      >
        {ProfilPhotoImg}
      </Profile>
    </div>
  );
}

export default App;
