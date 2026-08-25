import React from "react";

// Thrive gold gradient logo (mark + wordmark).
const THRIVE_LOGO =
  "https://customer-assets-eiarnc6j.emergentagent.net/job_free-zone-promo/artifacts/1b5s898a_Group%2042.png";

const Logo = ({ className = "" }) => {
  return (
    <img
      src={THRIVE_LOGO}
      alt="Thrive"
      className={`h-12 md:h-14 w-auto object-contain select-none ${className}`}
    />
  );
};

export default Logo;
