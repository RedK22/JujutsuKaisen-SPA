// import React from "react";
function StoryArc({title, items}) {
  return (
    <div>
      <li>{title}</li>
      <p className="text-base">
        {items.map((item, index) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}

export default StoryArc;
