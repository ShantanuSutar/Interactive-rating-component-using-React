import React, { useState } from "react";
import Active from "./Active";
import Submitted from "./Submitted";

const Card = () => {
  const [submitted, setSubmitted] = useState(false);
  const [finalRating, setFinalRating] = useState(null);
  return (
    <div className="card">
      {submitted ? (
        <Submitted finalRating={finalRating} />
      ) : (
        <Active
          finalRating={finalRating}
          setFinalRating={setFinalRating}
          setSubmitted={setSubmitted}
        />
      )}
    </div>
  );
};

export default Card;
