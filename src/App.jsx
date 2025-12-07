import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    subscribe: false,
    category: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  return (
    <div className="app-wrapper">
      <div className="form-container">
        <h1>Google Feedback Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-field">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">-- Select a category --</option>
              <option value="bug">Report a Bug</option>
              <option value="feature">Request a Feature</option>
              <option value="general">General Feedback</option>
            </select>
          </div>

          <div className="form-field">
            <label>Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Write your feedback here..."
            />
          </div>

          <div className="form-field checkbox-field">
            <label>
              <input
                type="checkbox"
                name="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
              />
              Subscribe to updates
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <h2>Thank you, {formData.name || "User"}! 🎉</h2>
            <p>Your feedback has been successfully submitted.</p>

            <div className="popup-details">
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Category:</strong> {formData.category}</p>
              <p><strong>Feedback:</strong> {formData.feedback}</p>
              <p><strong>Subscribed:</strong> {formData.subscribe ? "Yes" : "No"}</p>
            </div>

            <button className="popup-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
