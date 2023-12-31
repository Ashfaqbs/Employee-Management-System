import React, { useState } from "react";
import Cookies from 'js-cookie';

function CookieBar() {
   const [isCookieSet, setCookie] = useState(Cookies.get("cookieConsent"));
   const [showCookieBar, setShowCookieBar] = useState(true);
  
   // Function to handle accepting cookies
   const handleAcceptCookies = () => {
     // Collect browser details
    //  const userAgent = navigator.userAgent;
     const currentLocation = window.location.href;
     const historyLength = window.history.length;
     // Collect username (replace with actual method of getting username)
     const username = "username"; // replace this with actual method

     // Print details to console
    //  console.log(`User Agent: ${userAgent}`);
     console.log(`Current Location: ${currentLocation}`);
     console.log(`History Length: ${historyLength}`);
     console.log(`Username: ${username}`);



     const userAgent = navigator.userAgent;
     const parsedUserAgent = parseUserAgent(userAgent);
     console.log(parsedUserAgent);
     if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // Now you have the user's location
        });
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
      





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
