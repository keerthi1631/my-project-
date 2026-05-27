function App() {
  return (
    <div
        style={{
        backgroundColor: "#54092A",
        color: "white",
        minHeight: "100vh",
        fontFamily: "sans-seri",
        
      }}
    >

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "25px 50px",
          borderBottom: "1px solid #191970",
          position: "sticky",
          top: 0,
          backgroundColor: "black",
        }}
      >
        <h1 style={{ fontSize: "32px", fontWeight: "bold",letterSpacing: "3px",}}>
           
         <span  style={{ color:"red"}}>C</span>
           <span  style={{ color:"blue"}}>R</span>
             <span  style={{ color:"#1ff20c"}}>E</span>
               <span  style={{ color:"#c40cf2"}}>D</span>

        </h1>

        <button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "none",
            padding: "14px 30px",
            borderRadius: "40px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          Download App
        </button>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "150px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            lineHeight: "90px",
          }}
        >
          rewards for paying
          <br />
          credit card bills.
        </h1>

        <p
          style={{
            color: "gray",
            marginTop: "30px",
            fontSize: "22px",
          }}
        >
          join the club that rewards your financial lifestyle.
        </p>

        <button
          style={{
            marginTop: "40px",
            backgroundColor: "white",
            color: "black",
            padding: "18px 40px",
            border: "none",
            borderRadius: "18px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
          }}
        >
          Download CRED
        </button>
      </section>

      {/* Features */}
      <section
        style={{
          padding: "100px 50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "80px",
          }}
        >
          Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >

          {/* Card 1 */}
          <div
            style={{
              background: "#181818",
              padding: "40px",
              borderRadius: "25px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <h3 style={{ fontSize: "28px" }}>
              Credit Card Payments
            </h3>

            <p
              style={{
                color: "gray",
                marginTop: "20px",
                lineHeight: "30px",
              }}
            >
              Pay bills instantly and earn exciting rewards.
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: "#181818",
              padding: "40px",
              borderRadius: "25px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <h3 style={{ fontSize: "28px" }}>
              Cashback Rewards
            </h3>

            <p
              style={{
                color: "gray",
                marginTop: "20px",
                lineHeight: "30px",
              }}
            >
              Unlock premium cashback and exclusive offers.
            </p>
          </div>
          <div
            style={{
              background: "#181818",
              padding: "40px",
              borderRadius: "25px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <h3 style={{ fontSize: "28px" }}>
              Credit Score Tracking
            </h3>

            <p
              style={{
                color: "gray",
                marginTop: "20px",
                lineHeight: "30px",
              }}
            >
              Monitor your credit score anytime securely.
            </p>
          </div>

        </div>
      </section>
      <footer
        style={{
          borderTop: "1px solid #126885",
          marginTop: "100px",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "35px",
            marginBottom: "20px",
          }}
        >
          CRED
        </h2>

        <p
          style={{
            color: "white",
            marginBottom: "15px",
          }}
        >
          About | Careers | Privacy Policy | Terms
        </p>

        <p
          style={{
            color: "white",
            marginBottom: "15px",
          }}
        >
          Instagram | Twitter | LinkedIn
        </p>

        <p style={{ color: "white" }}>
          © 2026 CRED Clone. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;