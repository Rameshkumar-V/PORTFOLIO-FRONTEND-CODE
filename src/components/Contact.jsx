import { useEffect, useState } from "react";
import "./css/Contact.css";

function Contact() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    const contactdetails = [
      {
        name: "E-Mail",
        link: "vrameshkummar@gmail.com",
        img:"https://img.icons8.com/nolan/64/new-post.png"
      },
      {
        name: "Linked In",
        link: "www.linkedin.com",
        img:"https://img.icons8.com/color/48/linkedin.png"
      },
      {
        name: "Instagram",
        link: "www.instagram.com",
        img:"https://img.icons8.com/color/48/instagram-new--v1.png"
      },
      {
        name: "Hacker Rank",
        link: "www.hackerrank.com/vrameshkumar260",
        img:"https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png"
      },
    ];
    setContact(contactdetails);
  }, []);

  return (
    <div className="Contact" id="Contact">
      <h1>Contact</h1>

      <div className="Contact-Details">
        <table>
          <tbody>
            {contact.map((value, index) => (
              <tr key={index}>
                <td><img src={value.img} alt="" height={40} width={40}/></td>
                <td>{value.name}</td>
                <td><a href={value.link}>{value.link}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
