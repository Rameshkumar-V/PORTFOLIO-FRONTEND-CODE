import { useEffect, useState, useRef } from "react";
import "./css/Contact.css";
import axios from "axios";

function Contact() {
  const [contact, setContact] = useState([]);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/getcontact");
        console.log("fetched data:", response.data);
        setContact(response.data.contact);
        console.log(response.data); // Since the response is an array, get the first element
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!contactRef.current) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show-c');
          setShowContact(true);
        } else {
          entry.target.classList.remove('show-c');
          setShowContact(false);
        }
      });
    }, { threshold: 1.0 });

    observerRef.current.observe(contactRef.current);

    // return () => {
    //   if (observerRef.current) {
    //     observerRef.current.disconnect();
    //   }
    // };
  }, [contactRef]);

  return (
    <div className="Contact">
      <h2 style={{ color: "white"}}>Contact Me</h2>
      
    <div className="Contact-Details " ref={contactRef}>
      
      <table>
        <tbody>
          {contact.map((value, index) => (
            <tr key={index} className={showContact? "show" : "hidden"}>
              <td>
                <img src={value.img} alt="" height={40} width={40} />
              </td>
              <td>{value.name}</td>
              <td>
                <a href={value.link}>
                  <button className={`VisitButton ${showContact? "show" : ""}`}>
                    Visit
                  </button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Contact;