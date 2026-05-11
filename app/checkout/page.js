"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", address: "", city: "", zip: ""
  });

  const total = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("₹", "").replace(",", ""));
    return acc + price * item.quantity;
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        billing: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          address_1: formData.address,
          city: formData.city,
          postcode: formData.zip,
          country: 'IN' // Defaulting to India
        },
        line_items: cart.map(item => ({
          id: item.id,
          quantity: item.quantity
        }))
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      });

      if (res.ok) {
        clearCart();
        router.push("/thank-you");
      } else {
        const err = await res.json();
        alert(`Order failed: ${err.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong with the connection.");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !loading) {
    return (
      <div style={{ background: "var(--bg)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <h1 style={{ fontFamily: "var(--font-wack)", color: "var(--text)" }}>YOUR CART IS EMPTY</h1>
        <button onClick={() => router.push("/")} style={{ marginTop: "1rem", background: "var(--lime)", border: "none", padding: "0.8rem 2rem", borderRadius: "999px", fontFamily: "var(--font-wack)", cursor: "pointer" }}>GO SHOP 👽</button>
      </div>
    );
  }

  const inputStyle = {
    width: "100%", padding: "1rem", borderRadius: "12px", border: "1px solid var(--border)",
    background: "rgba(255,255,255,0.02)", color: "var(--text)", fontFamily: "var(--font-fun)",
    marginTop: "0.5rem"
  };

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "8rem 2rem 4rem" }}>
        <h1 style={{ fontFamily: "var(--font-wack)", fontSize: "3rem", color: "var(--lime)", marginBottom: "2rem" }}>CHECKOUT 🛸</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
          
          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>FIRST NAME</label>
                <input required style={inputStyle} value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
              </div>
              <div>
                <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>LAST NAME</label>
                <input required style={inputStyle} value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
              </div>
            </div>
            <div>
              <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>EMAIL</label>
              <input required type="email" style={inputStyle} value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>STREET ADDRESS</label>
              <input required style={inputStyle} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>CITY</label>
                <input required style={inputStyle} value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
              </div>
              <div>
                <label style={{ color: "var(--muted)", fontSize: "0.8rem" }}>ZIP CODE</label>
                <input required style={inputStyle} value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} />
              </div>
            </div>

            <button 
              disabled={loading}
              style={{
                background: "var(--lime)", color: "#000", border: "none", padding: "1.2rem",
                borderRadius: "999px", fontFamily: "var(--font-wack)", fontSize: "1.2rem",
                marginTop: "1rem", cursor: loading ? "wait" : "pointer", opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? "BEAMING YOUR ORDER... ☄️" : `PAY ₹${total.toLocaleString()} NOW`}
            </button>
          </form>

          {/* Summary */}
          <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "30px", padding: "2rem", border: "1px solid var(--border)", height: "fit-content" }}>
            <h3 style={{ fontFamily: "var(--font-wack)", color: "var(--sky)", marginBottom: "1.5rem" }}>ORDER SUMMARY</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                  <span style={{ color: "var(--text)" }}>{item.name} x {item.quantity}</span>
                  <span style={{ color: "var(--lime)" }}>{item.price}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px dashed var(--border)", display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-fun)", color: "var(--muted)" }}>Total</span>
              <span style={{ fontFamily: "var(--font-wack)", fontSize: "1.5rem", color: "var(--lime)" }}>₹{total.toLocaleString()}</span>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
