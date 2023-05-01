import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../state/commentsSlice";
import Moment from "react-moment";
import "./style.css";
import SkeletonLoading from "../LazyLoaing/SkeletonLoading";
const Comments = ({ id }) => {
  const dispatch = useDispatch();
  const { dataComments, loading } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  return (
    <section className="pt-5">
      <h2 className="content-head">Customer Reviews</h2>
      <div className="content-comments">
        <div className="ltn__comment-inner">
          {loading ? (
            <SkeletonLoading />
          ) : (
            <ul>
              {dataComments?.map((item) => (
                <li key={item.id}>
                  <div className="ltn__comment-item">
                    <div className="ltn__commenter-img">
                      <img
                        src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/testimonial/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ltn__commenter-comment">
                      <h6>{item.user}</h6>
                      <div className="rating"></div>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        edit={false}
                        value={parseInt(item.rating)}
                      />
                      <p>{item.text}</p>
                      <span class="ltn__comment-reply-btn">
                        <Moment format="D MMM YYYY">{item.created_at}</Moment>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Comments;
