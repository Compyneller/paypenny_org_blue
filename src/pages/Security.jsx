import React from "react";
import { Container } from "react-bootstrap";
import NavBarComp from "../components/NavBarComp/NavBarComp";

const Security = () => {
  return (
    <>
      <NavBarComp />
      <Container
        className="d-flex flex-column  justify-content-center"
        style={{ minHeight: "100vh", padding: "3rem 0" }}
      >
        <h1 className="section__heading">Paypenny Account Security</h1>
        <p>
          Whenever we use applications for financial transactions security is
          the first thing that comes to our mind. Paypenny Account security is
          our priority. From time to time we make sure our application & website
          are running with 100% security. We've taken several steps to protect
          your Paypenny account & your personal data. <br />
          <br />
          However, we suggest you do certain things that will not just help you
          in protecting your personal information but will also save your
          accounts from fraudsters.
        </p>
        <br />
        <h5
          className="section__sub__heading my-3"
          style={{ fontWeight: "bold" }}
        >
          Password Security
        </h5>
        <p>
          When you download the Paypenny app & log in to your account we have
          implemented certain things to protect your account. First, whenever
          you sign up for your Paypenny account, you sign up by getting OTP on
          your number. The one-time password is the secret message that comes on
          your registered mobile number & only you have access to it. When the
          time of log in, the Paypenny app asks you to generate a 4-digit mPIN &
          fingerprint password. Your Paypenny account is protected by the unique
          password created by you. You should never share your account password
          with anyone for better security. <br />
          <br />
          Paypenny website is secured with a secure server connection
          (https://). We use industry-standard Secure Socket Layer (SSL) with
          256-bit encryption, it protects our website & assures full-time
          safety.
        </p>
        <br />
        <h5
          className="section__sub__heading my-3"
          style={{ fontWeight: "bold" }}
        >
          Verification Processes of your account
        </h5>
        <p>
          The new customers who creates their Paypenny account has to go under
          verification process through KYC. We verify your personal details and
          then you can start using our services. All the accounts created by
          customers’ are subject to verification procedures to maintain high
          levels of safety of the application. <br />
          <br />
          For this process, we have made contact with industry-leading service
          providers to verify customers’ personal and financial information.
          These services use your information for anything but the successful
          completion of your intended transaction and will never contact you
          directly.
        </p>
        <br />
        <h5
          className="section__sub__heading my-3"
          style={{ fontWeight: "bold" }}
        >
          Beware of Internet Scams
        </h5>
        <ul>
          <li>
            DO NOT make a payment to claim lottery or prize winnings, or on a
            promise of receiving a large amount of money.
          </li>
          <li>
            DO NOT make a payment because you are "guaranteed" a credit card or
            loan.
          </li>
          <li>
            DO NOT respond to an Internet or phone offer that you aren't sure is
            honest.
          </li>
          <li>
            DO NOT make a payment to someone you don't know or whose identity
            you can't verify.
          </li>
        </ul>
        <p>
          When in doubt, ask the intended recipient for more information about
          the purpose and safety of the requested payment. Do not send the
          payment until you are comfortable with the transaction.
        </p>
        <br />
        <h5
          className="section__sub__heading my-3"
          style={{ fontWeight: "bold" }}
        >
          Identifying Phishing or Spoofed E-mails
        </h5>
        <p>
          You may at some time receive an e-mail that looks like it came from
          Paypenny, but is in fact not genuine. Such an e-mail may direct you to
          a website that looks similar to the Paypenny website or similar apk.
          You might even be asked to provide account information such as your
          e-mail address and password. <br />
          <br />
          These false websites can steal your sensitive account and payment
          information in order to commit fraud. These false e-mails may contain
          potential viruses or malware that can detect passwords or sensitive
          data. We, therefore, recommend that you only use our application which
          is available on App Store and Play Store. <br />
          <br />
          Avoid opening attachments e-mails that claims Paypenny as a sender.
          Paypenny never ask your details like CARD NUMBER, PIN, BANK DETAILS or
          other sensitive information through email. Whenever you found such
          e-mail, delete them without clicking the attachments. <br />
          <br />
          You can reports such things to us and protect your Paypenny account
          right away please e-mail to{" "}
          <a href="mailto:hello@paypenny.io">hello@paypenny.io</a>
        </p>
      </Container>
    </>
  );
};

export default Security;
