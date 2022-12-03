import Phone from "@images/phone.svg";
import Message from "@images/message.svg";
import LinkedIn from "@images/linkedin.svg";
import House from "@images/house.svg";

function ContactInformation(props) {
  return (
    <div className="contact-information">
      <div>
        <img src={Phone} alt="house" />
        <p>{props.state.phonenumber}</p>
      </div>
      <div>
        <img src={Message} alt="house" />
        <p>{props.state.email}</p>
      </div>
      <div>
        <img src={LinkedIn} alt="house" />
        <p>{props.state.linkedin}</p>
      </div>
      <div>
        <img src={House} alt="house" />
        <p>{props.state.adress}</p>
      </div>
    </div>
  );
}

export default ContactInformation;
