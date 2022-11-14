import React from "react";
import Image from "./Image";

const Profile = (props) => {
    const fullName = props.fullName;
    const bio = props.bio;
    const profession = props.profession;
    const handleClick = e => {
        e.preventDefault();
        alert("My name is Alaa Mtaallah");
      };
    return (
        <div className="container my-5 py-5">
            <div className="row justify-content-center col-6 mx-auto">
                <h1 className="text-center mx-auto">{fullName}</h1>
                <h2 className="text-center mx-auto">{profession}</h2>
                <Image><img className="text-center mx-auto" src="../af.png" alt=""/></Image>
                <p className="text-center">{bio}</p>
                <button className="clickBtn col-4" onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
};
export default Profile;