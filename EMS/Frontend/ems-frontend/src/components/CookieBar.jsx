import { useState } from "react";
import Cookies from 'js-cookie';
function CookieBar() {
    const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));
    const [showCookieBar, setShowCookieBar] = useState(true);
   
    // Function to handle accepting cookies
    const handleAcceptCookies = () => {
      Cookies.set("cookieConsent", true);
      setCookie(true);
      setShowCookieBar(false);
    };
   
    // Function to handle rejecting cookies
    const handleRejectCookies = () => {
      Cookies.remove("cookieConsent");
      setCookie(false);
      setShowCookieBar(false);
    };
   
    if (!showCookieBar) {
      return null;
    }
   
    return (
      <div>
        <div>
          <p>
            This website uses cookies to improve your experience. Do you accept
            cookies?
          </p>
          <button onClick={handleAcceptCookies}>Accept</button>
          <button onClick={handleRejectCookies}>Reject</button>
        </div>
        <sub>Cookie set: {isCookieSet ? <b>Yes</b> : <b>No</b>}</sub>
      </div>
    );
   }
   
   export default CookieBar;