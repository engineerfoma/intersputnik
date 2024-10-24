import React, { memo } from "react";

//router
import Link from "next/link";

interface LogoProps {
  imagePath: string
}

const Logo = memo(({ imagePath }: LogoProps) => {
  return (
    <>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src={imagePath}
            loading="lazy"
            alt="fara"
          />
        </Link>
      </div>
    </>
  );
});

Logo.displayName = "Logo";
export default Logo;
