const functions = require("firebase-functions");

const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
// to allow cross resource sharing
const cors = require("cors")({ origin: true });
admin.initializeApp();

// setting up nodemailer
//initialize - setup transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let options = {
  from: '"Kill Them Off Records" <killthemoffrecords@gmail.com>',
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // destructure param object -- query is where all our queries will appear
    const { name, email, phone, message } = request.query;

    // extend(spread) our mail options that we already have
    mailOptions = {
      ...options,
      to: "killthemoffrecords@gmail.com",
      subject: "Message Received",
      html: `
            <p style="font-size: 16px">From: ${name}</p>
            <p style="font-size: 16px">Email: ${email}</p>
            <p style="font-size: 16px">Phone: ${phone}</p>
            <p style="font-size: 16px">Message: ${message}</p>
        `,
    };

    // pass in our mailOption, and a error Callback function
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });

    // extend(spread) our mail options that we already have
    mailOptions = {
      ...mailOptions,
      // email from request(contact page value) to send receipt too
      to: email,
      subject: "We have received your message",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD Xqs  HTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html
          xmlns="http://www.w3.org/1999/xhtml"
          xmlns:v="urn:schemas-microsoft-com:vml"
          xmlns:o="urn:schemas-microsoft-com:office:office"
        >
          <head>
            <!--[if gte mso 9]>
              <xml>
                <o:OfficeDocumentSettings>
                  <o:AllowPNG />
                  <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
              </xml>
            <![endif]-->
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
              rel="stylesheet"
            />
            <title></title>
            <style type="text/css">
              p {
                margin: 0;
                padding: 0;
              }
              table {
                border-collapse: collapse;
              }
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                display: block;
                margin: 0;
                padding: 0;
              }
              img,
              a img {
                border: 0;
                height: auto;
                outline: none;
                text-decoration: none;
              }
              body,
              #bodyTable,
              #bodyCell {
                height: 100%;
                margin: 0;
                padding: 0;
                width: 100%;
              }
              #outlook a {
                padding: 0;
              }
              img {
                -ms-interpolation-mode: bicubic;
              }
              table {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
              }
              .ReadMsgBody {
                width: 100%;
              }
              .ExternalClass {
                width: 100%;
              }
              p,
              a,
              li,
              td,
              blockquote {
                mso-line-height-rule: exactly;
              }
              a[href^="tel"],
              a[href^="sms"] {
                color: inherit;
                cursor: default;
                text-decoration: none;
              }
              p,
              a,
              li,
              td,
              body,
              table,
              blockquote {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
              }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass td,
              .ExternalClass div,
              .ExternalClass span,
              .ExternalClass font {
                line-height: 100%;
              }
              a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
              }
              @media only screen and (max-width: 480px) {
                .m_device_width {
                  width: 100% !important;
                  min-width: 100% !important;
                  height: auto !important;
                }
                .m_db {
                  display: block !important;
                }
                .text-center {
                  text-align: center !important;
                }
                .mob_hidden {
                  display: none !important;
                }
                .mob_ptb80lr20 {
                  padding: 80px 25px !important;
                }
                .h_auto {
                  height: auto !important;
                }
                .font11 {
                  font-size: 11px !important;
                }
                .social_icon {
                  width: 100% !important;
                  min-width: 100% !important;
                  height: auto !important;
                }
                .spacer {
                  padding: 0% 5% !important;
                }
                .mob_pr12 {
                  padding: 0px 12px 0px 0px !important;
                }
                .sm_icon {
                  width: 14px !important;
                }
              }
            </style>
          </head>
          <body align="center" style="margin:0; padding:0; background:#e5e5e5;">
            <table
              align="center"
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
              style="background:#e5e5e5"
              id="bodyTable"
            >
              <tr>
                <td align="center" id="bodyCell">
                  <table
                    align="center"
                    width="100%"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    style="background:#e5e5e5"
                    class="m_device_width"
                  >
                    <tr>
                      <td align="center">
                        <table
                          align="center"
                          width="600"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          style="background:#000000"
                          class="m_device_width"
                        >
                          <tr>
                            <td
                              align="center"
                              background="https://i.imgur.com/OOD0bZL.jpg"
                              bgcolor="#ffffff"
                              width="600"
                              height="617"
                              valign="top"
                              style="background-repeat:no-repeat;"
                              class="h_auto m_device_width"
                            >
                              <!--[if gte mso 9]>
                                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                                            <v:fill type="tile" src="https://i.imgur.com/OOD0bZL.jpg" color="#ffffff" />
                                            <v:textbox inset="0,0,0,0">
                                            <![endif]-->
                              <div>
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      width="85"
                                      style="width:85px"
                                      class="mob_hidden"
                                    >
                                      <img
                                        align="center"
                                        src="https://i.imgur.com/HR1pI0g.gif"
                                        alt=""
                                        width="85"
                                        style="width:85px; display:block"
                                      />
                                    </td>
                                    <td
                                      align="center"
                                      style="padding:160px 0px"
                                      class="mob_ptb80lr20"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        style="background:#0B72B9; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);"
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            style="padding:85px 35px 110px 35px"
                                          >
                                            <table
                                              align="center"
                                              width="100%"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td
                                                  align="center"
                                                  style="font-family: 'Pacifico', Tahoma; font-size:34.28px; font-weight:normal; line-height:35px; color:#fff; text-align:center;"
                                                >
                                                  Hello
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="center"
                                                  style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#fff; text-align:center;"
                                                >
                                                  Thanks for sending us a message! We???ll
                                                  get back to you as soon as possible.
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                    <td
                                      align="center"
                                      width="85"
                                      style="width:85px"
                                      class="mob_hidden"
                                    >
                                      <img
                                        align="center"
                                        src="https://i.imgur.com/HR1pI0g.gif"
                                        alt=""
                                        width="85"
                                        style="width:85px; display:block"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </div>
                              <!--[if gte mso 9]>
                                            </v:textbox>
                                            </v:rect>
                                            <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
     `,
    };
    transporter.sendMail(mailOptions);
  });
});
