import "./App.css";

function App() {
  return (
    <div className="form-container">
      <form className="contact-form">
        <h1>Contact Form</h1>

        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>To</label>
        <input
          type="email"
          placeholder="Enter recipient email"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;