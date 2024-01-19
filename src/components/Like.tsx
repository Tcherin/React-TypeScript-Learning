import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps): JSX.Element => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart onClick={toggle} color="#ff6b81" size={20} />;
  return <AiOutlineHeart onClick={toggle} color="#ff6b81" size={20} />;
};

export default Like;
