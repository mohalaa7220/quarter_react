import React from "react";

const BookProduct = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  handleSubmit,
  loadingBook,
}) => {
  return (
    <div className="right_side">
      <div className="widget">
        <h4 className="content-head">Drop Message For Book</h4>
        <form onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Your e-Mail*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Write Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className={loadingBook ? "btn2 btn_loading " : "btn2"}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(BookProduct);
