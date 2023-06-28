import { Linking } from "react-native";

export const enviarCorreo = async (invitado) => {
  try {
    const subject = "Invitación a nuestro evento";
    const body = `
        Estimado(a) ${invitado.nombre},
  
        Te invitamos a nuestro evento especial. Adjunto encontrarás tu código QR personalizado con tus datos de invitado.
  
        Saludos,
        El equipo de organización
      `;

    // Generar el código QR como una imagen local
    const qrCodeData = JSON.stringify(invitado);
    const qrCodeFilePath = `${Platform.OS === "ios" ? "" : "file://"}${
      RNFS.CachesDirectoryPath
    }/qrcode.png`;

    await captureRef(qrCodeRef, {
      format: "png",
      quality: 1,
    }).then(async (uri) => {
      await writeFile(qrCodeFilePath, uri, "base64");
    });

    // Adjuntar el código QR al correo electrónico
    const attachments = [
      {
        path: qrCodeFilePath,
        type: "image/png",
        name: "qrcode.png",
      },
    ];

    const mailtoUrl = `mailto:${invitado.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl);
    console.log("Correo electrónico enviado correctamente.");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
  }
};
