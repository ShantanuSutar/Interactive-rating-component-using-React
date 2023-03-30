import React from "react";
import { useState } from "react";
const Active = ({ finalRating, setFinalRating, setSubmitted }) => {
  const [rating, setRating] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
    five: false,
  });

  const handleSubmit = () => {
    if (!finalRating) return;
    setSubmitted(true);
  };

  return (
    <div className="active">
      <picture>
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </picture>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <section>
        <p
          onClick={() => {
            setRating({
              one: true,
              two: false,
              three: false,
              four: false,
              five: false,
            });
            setFinalRating(1);
          }}
          className={rating.one ? "select" : ""}
        >
          1
        </p>
        <p
          onClick={() => {
            setRating({
              one: false,
              two: true,
              three: false,
              four: false,
              five: false,
            });
            setFinalRating(2);
          }}
          className={rating.two ? "select" : ""}
        >
          2
        </p>
        <p
          onClick={() => {
            setRating({
              one: false,
              two: false,
              three: true,
              four: false,
              five: false,
            });
            setFinalRating(3);
          }}
          className={rating.three ? "select" : ""}
        >
          3
        </p>
        <p
          onClick={() => {
            setRating({
              one: false,
              two: false,
              three: false,
              four: true,
              five: false,
            });
            setFinalRating(4);
          }}
          className={rating.four ? "select" : ""}
        >
          4
        </p>
        <p
          onClick={() => {
            setRating({
              one: false,
              two: false,
              three: false,
              four: false,
              five: true,
            });
            setFinalRating(5);
          }}
          className={rating.five ? "select" : ""}
        >
          5
        </p>
      </section>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Active;
