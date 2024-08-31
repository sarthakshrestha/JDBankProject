import React from "react";
import { Info, Building } from "lucide-react";  // Import Lucide React icons
import AboutPicture from "../pictures/unsplash_-uHVRvDr7pg.png";
import Establishment from "../pictures/Rectangle 44.png";

export default function AboutPage() {
    return (
        <div style={styles.container}>
            <Section
                image={AboutPicture}
                title="About Us"
                icon={<Info size={24} color="#4299e1" />}
                description={`
                    JD Bank is a leading financial institution dedicated to providing
                    top-notch banking solutions. With a commitment to excellence and
                    innovation, we offer a wide range of services to meet the diverse
                    needs of our customers. At JD Bank, we take pride in being a
                    leading financial institution committed to delivering exceptional
                    banking solutions. Our journey is built on a foundation of
                    excellence, innovation, and a strong dedication to meeting the
                    diverse needs of our valued customers. With an unwavering focus on
                    client satisfaction, we strive to exceed expectations by providing
                    a comprehensive range of services that empower individuals,
                    families, and businesses to achieve their financial aspirations.
                `}
                reverse={false}
            />
            <Section
                image={Establishment}
                title="Establishment"
                icon={<Building size={24} color="#4299e1" />}
                description={`
                    Founded in 1995, JD Bank has rapidly grown to become a trusted
                    partner for individuals and businesses. Our mission is to
                    empower our clients to achieve their financial goals through
                    strategic planning, personalized services, and cutting-edge
                    technology, we have been instrumental in helping our customers
                    turn their aspirations into reality. Guided by integrity,
                    transparency, and a deep commitment to community, we continue to
                    chart new paths in the financial landscape, ensuring that our
                    clients' financial well-being remains our top priority.
                `}
                reverse={true}
            />
        </div>
    );
}

const Section = ({ image, title, icon, description, reverse }) => (
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
        width: '180vh',
        backgroundColor: '#ffffff',
        padding: '60px',
        margin: '0 auto',
    },
    section: {
        marginBottom: '80px',
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
    },
    imageContainer: {
        flex: '1',
        maxWidth: '500px',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '12px',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    },
    descriptionContainer: {
        flex: '1',
    },
    title: {
        fontSize: '32px',
        color: '#2d3748',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
    },
    titleText: {
        borderBottom: '3px solid #4299e1',
        paddingBottom: '6px',
    },
    description: {
        fontSize: '18px',
        lineHeight: '1.8',
        color: '#4a5568',
    },
};
