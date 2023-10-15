import React, { useEffect, useState } from "react";
import "./style.css";
import { FaPen } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../state/commentsSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
const AddComments = ({ id }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadingAdd, message, success } = useSelector(
    (state) => state.comments
  );
  const { isAuth, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 || rating.length === 0 || rating > 5) {
      toast.error("Enter All data");
      return;
    }
    if (isAuth || user?.length === 0) {
      toast.error("You must be logged in");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
      return;
    }
    dispatch(AddComment({ id: id, formData: { text, rating, product: id } }));
  };

  useEffect(() => {
    if (message) {
      toast.success(`${message}`);
    }
    if (success) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [message, success]);

  return (
    <section className="ltn__comment-reply-area">
      <form method="POST" onSubmit={handleSubmit}>
        <h4>Add a Review</h4>
        <div class="input-item input-item-textarea ltn__custom-icon">
          <FaPen />
          <textarea
            name="text"
            placeholder="Type your comments...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div class="input-item input-item-rating">
          <TbStarsFilled />
          <input
            placeholder="Rating"
            type="number"
            name="rating"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={loadingAdd ? "btn2 btn_loading " : "btn2"}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddComments;
