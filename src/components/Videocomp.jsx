import React from 'react';
import {useParams} from "react-router-dom";
import { useRef } from 'react';
import { useEffect } from 'react';

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Videocomp() {
  // return (
    const {roomID}=useParams();
    console.log(roomID);
    const containerRef=useRef(null);
     useEffect(()=>{
      let myMeeting = async (element) => {
        if(!roomID || !containerRef.current) return;
        // generate Kit Token
         const appID = 1647675551;
         const serverSecret = "da4b0ca00d44193fff5e87802ed2b7ae";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,
            Date.now().toString(), 
            "anonymous");
     
       
        // Create instance object from Kit Token.
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         // start the call
         zp.joinRoom({
           container: element,
           sharedLinks: [
             {
               name: 'Personal link',
               url:
                window.location.protocol + '//' + 
                window.location.host + window.location.pathname +
                 '?roomID=' +
                 roomID,
             },
           ],
           scenario: {
             mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
           },
         });
     
       
     };

myMeeting();
return()=>{
  if(containerRef.current){
    containerRef.current.innerHTML="";
  }
}

     },[roomID]);

return (
  <div
    className="myCallContainer"
    ref={containerRef}
    style={{ width: '100vw', height: '100vh' }}
  ></div>
);
  // )
}

export default Videocomp