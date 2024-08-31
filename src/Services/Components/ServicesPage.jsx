import React from "react";
import { Briefcase, CreditCard, Shield, Leaf } from "lucide-react";  // Import Lucide React icons
import AboutPicture from "./pictures/6237073.jpg";
import Establishment from "./pictures/PeopleTalking.jpg";
import InsurancePicture from "./pictures/26675.jpg";
import AgriculturePicture from "./pictures/8400.jpg";

export default function ServicesPage() {
  return (
    <div style={styles.container}>
      <ServiceSection
        image={AboutPicture}
        title="Remittance Services"
        description="Sending money to loved ones far away or receiving funds from abroad is easy with JD Bank. Our secure and quick remittance services ensure smooth transactions. You can trust us for competitive exchange rates and a user-friendly experience, connecting you to your global financial needs."
        icon={<Briefcase size={24} color="#4299e1" />}
        reverse={false}
      />
      <ServiceSection
        image={Establishment}
        title="Utility Services"
        description="Life's simpler with JD Bank's utility services. Paying bills is convenient and straightforward. From electricity and water bills to internet and phone payments, we make it easy to manage your expenses. Enjoy the ease of handling your utilities all in one place with JD Bank."
        icon={<CreditCard size={24} color="#4299e1" />}
        reverse={true}
      />
      <ServiceSection
        image={InsurancePicture}
        title="Insurance Services"
        description="Your peace of mind matters. JD Bank offers insurance plans to protect what's important. Our coverage includes health, life, and property, providing security against the unexpected. With flexible options and expert advice, JD Bank helps you make wise choices for a secure future."
        icon={<Shield size={24} color="#4299e1" />}
        reverse={false}
      />
      <ServiceSection
        image={AgriculturePicture}
        title="Agriculture Services"
        description="For farmers and those in agriculture, JD Bank has specialized solutions to support your growth. Whether you need funding for crops, equipment, or agribusiness, we're here for you. Our team understands your unique needs and is ready to help you succeed in your agricultural ventures."
        icon={<Leaf size={24} color="#4299e1" />}
        reverse={true}
      />
    </div>
  );
}

const ServiceSection = ({ image, title, description, icon, reverse }) => (
  <div style={styles.section}>
    <div style={{ ...styles.content, flexDirection: reverse ? 'row-reverse' : 'row' }}>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.descriptionContainer}>
        <h2 style={styles.title}>
          {icon}
          <span style={styles.titleText}>{title}</span>
        </h2>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  </div>
);

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '60px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '60px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px',
  },
  imageContainer: {
    flex: '1',
    maxWidth: '500px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  descriptionContainer: {
    flex: '1',
  },
  title: {
    fontSize: '28px',
    color: '#2d3748',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  titleText: {
    borderBottom: '2px solid #4299e1',
    paddingBottom: '4px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#4a5568',
  },
};
