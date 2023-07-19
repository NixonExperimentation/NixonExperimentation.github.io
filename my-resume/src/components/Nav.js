import React from "react";

export function Nav() {
  const list = ["Home","Blog","Certifications","Contact"];
  const lists = list.map((list)=>{<li>{list}</li>});
  return (
    <ul>
      {lists}
    </ul>
  );
}
