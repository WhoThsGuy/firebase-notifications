import { useEffect, useState } from "react";
import "./button.css";

const Button = ({ token }) => {
  const [success, setSuccess] = useState();

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
        setSuccess(true);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    if (!success) {
      return;
    }

    let timer = setTimeout(() => {
      setSuccess(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <button type="button" onClick={send} disabled={success}>
      {success ? "Notification was sent" : "Send Notification"}
    </button>
  );
};

export default Button;
