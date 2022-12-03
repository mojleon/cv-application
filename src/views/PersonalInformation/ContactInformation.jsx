import Input from "../../components/Input";
import Image from "../../components/Image";

function ContactInformation(props) {
  return (
    <div id="contact-information">
      <h3>Contact information</h3>
      <Input
        placeholder="Phone number"
        name="phonenumber"
        onStateChange={props.onStateChange}
      />
      <Input
        placeholder="Email"
        name="email"
        onStateChange={props.onStateChange}
      />
      <Input
        placeholder="LinkedIn"
        name="linkedin"
        onStateChange={props.onStateChange}
      />
      <Input
        placeholder="Adress"
        name="adress"
        onStateChange={props.onStateChange}
      />
      <Image
        placeholder="Image"
        name="image"
        onImageChange={props.onImageChange}
      />
    </div>
  );
}

export default ContactInformation;
