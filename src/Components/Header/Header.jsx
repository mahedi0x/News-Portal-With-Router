import React from "react";
import logo from "../../assets/logo.png"
import { format } from "date-fns";

const Header = () => {
  return (
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="The Dragon News"
          className="h-12 md:h-16 lg:h-16 mb-4 object-contain"
        />

        <p className="text-accent text-base md:text-lg  mb-2">
          Journalism Without Fear or Favour
        </p>

         <p className="text-accent font-bold">{format(new Date(), "EEEE,  dd MMMM, yyyy")}</p>
        

       
        {/* <h1 className="text-mefista font-bold text-5xl">
        Hello Mahedi Hasan 👋
      </h1> */}

      </div>

  );
};

export default Header;
