import { useEffect, useState } from "react";
import firebase from "./firebase";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

function App() {
  const [token, setToken] = useState("");

  const send = () => {
    const key =
      "AAAA9QT3yMI:APA91bFAJkxAz8nAfgXPeVq5Y_64Z5wgG5kbNfVPcR6u3XNeCM9oZExXKCec_C__yQg4Li-lOhsdiwRfV6iBzwH8QJl_MajNrylvs6vrhbiZKvcSDb_fylBEMz3LRjk0BkFcDI99rxUL";
    const notification = {
      title: "Portugal vs. Denmark",
      body: "5 to 1",
    };

    fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        Authorization: "key=" + key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notification: notification,
        to: token,
      }),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    const messaging = getMessaging(firebase);

    onMessage(messaging, (payload) => {
      const { notification } = payload;

      new Notification(notification.title, notification);
      console.log("Message received. ", payload);
    });

    getToken(messaging, {
      vapidKey:
        "BK3ajb82EOS0lhHQwJc5R8OWNbPJ1B8lPZ1zqAqKS9r96Dit8F4AbZL5a2z8mScVffjh9JRPOBruA4zqxUs-H1U",
    })
      .then((currentToken) => {
        if (!currentToken) {
          Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
              console.log("granted");
            } else {
              console.log("Unable to get permissions to notify");
            }
          });

          return console.log(
            "No registration token available. Request permission to generate one."
          );
        }

        setToken(currentToken);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="App">
      <button type="button" onClick={send}>
        Send test Notif
      </button>
    </div>
  );
}

export default App;
