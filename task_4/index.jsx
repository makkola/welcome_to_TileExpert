import { useState } from "react";

export const Block = ({ mouseEnterCallbak, imgSrc, imgAlt, content, userData }) => { // передам block в файл index из песочницы вместо block1, block2 и block3
  const [isActive, setActive] = useState(false);

  const mouseEnterHandler = () => {
    setActive(true);
    mouseEnterCallbak();
  };

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? "active" : ""}>
      {imgSrc && <img src={imgSrc} alt={imgAlt} />}
      {content && <p>{content}</p>}
      {userData && (
        <address>
          country: {userData.country}, street: {userData.street}
        </address>
      )}
    </div>
  );
}; 