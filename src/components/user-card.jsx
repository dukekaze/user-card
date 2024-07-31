import React from "react";

const UserCard = ({ userImg, firstName }) => {
  return (
    <div className="">
      <div className="p-5 flex gap-4 flex-col items-center justify-center ">
        <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
        <div>
          <h1>{firstName}</h1>
          {/* <p>{position}</p> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
