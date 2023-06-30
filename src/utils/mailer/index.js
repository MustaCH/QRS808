import { Linking } from "react-native";

const sendEmail = (emailData) => {
  const { to, subject, body } = emailData;
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}`;

  Linking.canOpenURL(mailtoUrl)
    .then((supported) => {
      if (!supported) {
        console.log("No es posible abrir el correo");
      } else {
        return Linking.openURL(mailtoUrl);
      }
    })
    .catch((error) => console.log("Error al abrir la app correo", error));
};

export default sendEmail;
