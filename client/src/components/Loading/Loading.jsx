import style from "./Loading.module.css"
import { useState, useEffect } from 'react';

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoading(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (!showLoading) {
    return null;
  }

  return <p className={style.loading}>Loading...</p>;
};

export default Loading;