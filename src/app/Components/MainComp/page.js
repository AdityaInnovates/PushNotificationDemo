"use client";
/* global Notification */
/* global navigator */
import React from "react";

const MainComp = () => {
  const registerSW = async () => {
    const registration = await navigator.serviceWorker.register("sw.js");
    return registration;
  };
  var requestNotification = async () => {
    var perm = await Notification.requestPermission();
    if (perm == "granted") {
      return true;
      const notification = new Notification("DigiLabs Alerts", {
        body: "This is a push notification test.",
        data: { data: "push notification identifier" },
        icon: "/Logo.png",
        tag: "test",
      });
    } else {
      alert("Please grant notification access in order for this app to work.");
      return false;
    }
  };

  var sendNotification = async () => {
    var notificationAllowed =
      Notification.permission == "granted" ? true : false;
    if (Notification.permission != "granted") {
      notificationAllowed = await requestNotification();
    }
    if (notificationAllowed) {
      const reg = await registerSW();
      reg.showNotification("DigiLabs Alerts", {
        body: "This is a push notification test.",
        data: { data: "push notification identifier" },
        icon: "/Logo.png",
        // tag: "test",
      });
    }
  };
  return (
    <div>
      <div className="absolute w-full top-[2rem] flex items-center justify-center z-[1]">
        <h3
          className="text-3xl clipartanim"
          style={{ fontFamily: "Playwrite BE VLG" }}
        >
          Hello!
        </h3>
      </div>
      <div>
        <div className="absolute w-full h-[14rem] flex flex-col /gap-[2rem] /items-baseline /justify-center bottom-0 left-0 z-[1]">
          <div className="flex items-center flex-col gap-[1rem] justify-center w-full">
            <h3
              className="/font-semibold  text-xl"
              style={{ fontFamily: "outfit" }}
            >
              Demo Push Notification App
            </h3>
            <h3
              className="text-center text-slate-300 font-extralight"
              style={{ fontFamily: "poppins" }}
            >
              Created on Next.js With 💖 by Aditya
            </h3>
          </div>
          <div className="mt-[2rem] w-full flex items-center justify-center py-[0.5rem] px-[1.5rem]">
            <button
              style={{ fontFamily: "outfit" }}
              className="px-[1rem] py-[0.5rem] hover:bg-[#6434ce] w-full md:w-[22rem] bg-[#1d103a] border-2 border-[#6434ce] rounded-xl transition-all duration-300"
              onClick={() => sendNotification()}
            >
              Send Notification
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          "flex justify-center items-center h-[100vh] relative w-[100vw] overflow-hidden "
          // backdropStyle
        }
      >
        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#2c2143] via-[#140f1f] to-black"></div>
        <div className="h-[10rem] w-[100vw] flex justify-center items-center /mb-[13rem]">
          <div
            className="1p-3 1border-white 1border-2 rounded-full loadinglogoaniminit "
            style={{ "--timing": "0s" }}
          >
            <div
              className="1p-3 1border-white 1border-2 rounded-full loadinglogoaniminit "
              style={{ "--timing": "1s" }}
            >
              <div className="p-[4rem] rounded-full top-[34.5%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-[#29174f] /w-[10rem] /h-[10rem] z-[10] absolute /loadinglogomainimganiminit">
                <i
                  style={{
                    textShadow: `0 0 7px #d4c1ff,
     0 0 10px #d4c1ff,
     0 0 21px #d4c1ff
    `,
                  }}
                  className="fi fi-rr-bell flex items-center text-[3rem] /loadinglogomainimganiminit"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
