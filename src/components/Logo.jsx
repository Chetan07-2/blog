import React from "react";

function Logo({ width = "100px" }) {
  return (
     <div>
      <img
      className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 bg-transparent"
       src="https://banner2.cleanpng.com/20180701/luw/kisspng-blogger-logo-computer-icons-encapsulated-postscrip-logotypes-5b3884b8019147.6891223415304306480064.jpg" alt="blog logo" />
     </div>
  );
}

export default Logo;
