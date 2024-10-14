import React, { memo, Fragment } from "react";

//router
import Link from "next/link";

const Logo = memo(() => {
  return (
    <Fragment>
      <div className="logo-default">
        <Link className="navbar-brand text-primary" href="/">
          <img
            className="img-fluid logo"
            src="/assets/images/logo.webp"
            loading="lazy"
            alt="fara"
          />
        </Link>
      </div>
    </Fragment>
  );
});

Logo.displayName = "Logo";
export default Logo;
