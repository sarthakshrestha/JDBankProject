import React, { useState } from "react";
import { Briefcase, TrendingUp, Building2 } from "lucide-react";

export default function Investment() {
    const [showPopup, setShowPopup] = useState(null);

    const handleViewClick = (type) => {
        setShowPopup(type);
    };

    const handleClosePopup = () => {
        setShowPopup(null);
    };

    const investments = [
        {
            type: "stocks",
            title: "Stocks: Your Path to Ownership",
            icon: <TrendingUp size={48} color="#1e40af" />,
            description: "JD Bank Stocks: Empower your financial future. Invest with confidence in a world of opportunities. From established blue-chip companies to emerging sectors, we offer a diverse range of investment options. Our experts are here to guide you on your path to financial empowerment. Join us today and take control of your financial destiny."
        },
        {
            type: "bonds",
            title: "Bonds: Steady Income, Secure Future",
            icon: <Briefcase size={48} color="#1e40af" />,
            description: "Invest in the stability of bonds for financial security. Enjoy consistent returns and build a foundation for your future. Our experts are here to help you make smart investment decisions. Start your journey towards financial peace of mind with JDBank Bonds today."
        },
        {
            type: "realEstate",
            title: "Real Estate: Tangible Assets, Tangible Returns",
            icon: <Building2 size={48} color="#1e40af" />,
            description: "Diversify your portfolio with the stability and potential of real estate. Build wealth through property ownership and watch your investment grow. Our real estate experts are here to guide you on the path to financial success. Start your journey with JD Bank Real Estate today."
        }
    ];

    return (
        <div style={styles.investment}>
            <h1 style={styles.title}>Investment Sector</h1>
            <p style={styles.description}>
                Unlock a world of financial possibilities with our diverse range of
                investment opportunities. Whether you're a seasoned investor or just
                starting out on your financial journey, we have options tailored to your
                goals.
            </p>
            <div style={styles.boxContainer}>
                {investments.map((investment) => (
                    <div key={investment.type} style={styles.investmentBox}>
                        <div style={styles.boxContent}>
                            {investment.icon}
                            <h3 style={styles.boxTitle}>{investment.title}</h3>
                            <button
                                style={styles.viewMoreButton}
                                onClick={() => handleViewClick(investment.type)}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div style={styles.popup}>
                    <div style={styles.popupContent}>
                        <h2 style={styles.popupTitle}>
                            {investments.find(i => i.type === showPopup).title}
                        </h2>
                        <p style={styles.popupDescription}>
                            {investments.find(i => i.type === showPopup).description}
                        </p>
                        <button style={styles.okButton} onClick={handleClosePopup}>
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    investment: {
        backgroundColor: '#ffffff',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1e40af',
        marginBottom: '20px',
        textAlign: 'center',
    },
    description: {
        fontSize: '1.1rem',
        color: '#4b5563',
        lineHeight: '1.6',
        marginBottom: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 40px',
    },
    boxContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
    },
    investmentBox: {
        flex: '1 1 300px',
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        padding: '30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        ':hover': {
            transform: 'translateY(-5px)',
        },
    },
    boxContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    boxTitle: {
        fontSize: '1.3rem',
        color: '#1e40af',
        marginTop: '20px',
        marginBottom: '15px',
    },
    viewMoreButton: {
        backgroundColor: '#1e40af',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
        ':hover': {
            backgroundColor: '#2563eb',
        },
    },
    popup: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    popupContent: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    popupTitle: {
        fontSize: '1.8rem',
        color: '#1e40af',
        marginBottom: '20px',
    },
    popupDescription: {
        fontSize: '1rem',
        color: '#4b5563',
        lineHeight: '1.6',
        marginBottom: '20px',
    },
    okButton: {
        width: '100%',
        backgroundColor: '#1e40af',
        color: '#ffffff',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
        ':hover': {
            backgroundColor: '#2563eb',
        },
    },
};
