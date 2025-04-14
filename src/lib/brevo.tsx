"use server"
import * as brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_API_KEY as string
);

interface Params {
    nombre: string;
    mail: string;
    htmlContent: string;
}

export async function sendEmail({nombre, mail, htmlContent}: Params){
    const brevoString = process.env.BREVO_API_KEY as string;

    const subject:string = nombre + " ha enviado una consulta desde la página de Precios de Medicamentos";
    const content:string = "<h4>" + nombre + " ha hecho la siguiente consulta desde la página web de Precios de Medicamentos:</h4><br/><p>" + htmlContent + "</p>";

    const smtpEmail = new brevo.SendSmtpEmail();
    smtpEmail.subject = subject;
    smtpEmail.to = [{email: "diazjavier10@yahoo.com.ar", name: "Javier"}, {email: "alejandromacchia100@gmail.com", name: "Alejandro Macchia"}, {email: "diazjavier@hotmail.com", name: "Javier"}];
    smtpEmail.htmlContent = content;
    smtpEmail.sender = {email: "diazjavier@hotmail.com", name: "Precios de Medicamentos"};
    smtpEmail.replyTo = {email:mail, name:nombre};

    const rta = await apiInstance.sendTransacEmail(smtpEmail);

}