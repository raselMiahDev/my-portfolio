import Heading from "../Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <div className="bg-[#D6F2FF]">
                    <div className="max-w-screen-xl mx-auto px-14 md:px-24 md:py-10 py-10 mt-10">
            <div>
                <Heading title="Contact With Me"/>

                <div className="md:grid grid-cols-2 py-10 gap-10">
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;