import { getToken } from "./firebase";
import { useEffect } from "react";
import { messaging } from "./firebase";

const RequestNotificationPermission = () => {
  useEffect(() => {
    const requestPermission = async () => {
      try {
        // Request permission for notifications
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          // If permission is granted, get the FCM token
          const token = await getToken(messaging, {
            vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
          });

          if (token) {
            console.log("FCM Token:", token);
            // Send the token to your backend for notification delivery
          } else {
            console.log("No registration token available.");
          }
        } else {
          console.log("Permission denied for notifications.");
        }
      } catch (error) {
        console.error("Error while getting FCM token:", error);
      }
    };

    requestPermission();
  }, []);

  return null;
};

export default RequestNotificationPermission;
