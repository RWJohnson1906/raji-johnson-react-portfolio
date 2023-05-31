import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    // Data that we will need
    // List- Background Img=thumb_image_url, 
    // Logo=logo, 
    // Description=description, 
    // id=id

    const { id, description, thumb_image_url, logo} = props.item;
  return (
    <div>
      <img src={thumb_image_url} />
      <img src={logo} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}