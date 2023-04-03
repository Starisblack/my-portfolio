import { Grid } from "@mui/material";
import "./Contact.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import Form from "./Form/Form";
import { Animation } from "../../utils/animation";

const Contact = () => {
  const contactList = [
    {
      title: "samuelkayode622@gmail.com",
      icon: MailOutlineIcon,
      href: "mailto:samuelkayode622@gmail.com",
    },

    {
      title: "+2348104208431",
      icon: PhoneIcon,
      href: "tel:+2348104208431",
    },

    {
      title: "Ibadan, Oyo State, Nigeria.",
      icon: PlaceIcon,
    },
  ];

  return (
    <div id="contact" className="section-container">
      <div className="heading-subtitle primary-color">CONTACT ME</div>{" "}
      <h3 className="heading-title">Let’s get in touch</h3>
      <Grid container gap={1}  className="contact-details-box">
        <Grid item xs={12} md={5}>
          {contactList.map((contact) => {
            return (
              <Grid item key={contact.title}  xs={12} md={12}>
              <Animation type="fade-up">
                <a
                  href={contact?.href}
                  rel="noreferrer"
                  className="contact-box"
                >
                  <contact.icon />
                  {contact.title}
                </a>
                </Animation>
              </Grid>
            );
          })}
        </Grid>

        <Grid item xs={12} md={6}>
        <Animation type="fade-up">
          <Form />
          </Animation>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
