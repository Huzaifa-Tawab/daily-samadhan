import React from "react";

function Contact() {
  return (
    <div>
      Contact
      <div className="input-box">
        <div>
          <form>
            <div
              style={{ display: "flex", gap: "10px " }}
              className="contact-flex"
            >
              <label>Name:</label>
              <input type="text" name="name" />
              <label>Last Name:</label>
              <input type="text" name="Name" />
            </div>
            <label>phone Number</label>
            <input type="number" name="number"></input>
            <br></br>
            <label> email:</label>
            <input type="email" name="email" />
            <br />
            <br />
            <label>description</label>
            <textarea name="description"></textarea>
            <br />

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
