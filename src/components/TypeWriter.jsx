import React, { useEffect, useRef, useState } from "react";

const TypeWriter = ({ text }) => {
  const index = useRef(0);
  const [currentText, setCurrentText] = useState(text.charAt(0));

  useEffect(() => {
    index.current = 0;
    setCurrentText('');
  }, [text]);

  useEffect(() => {
    if (index.current < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index.current));
        index.current += 1;
      }, 100); // Adjust the timeout duration as needed
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [currentText, text]);

  return <>{currentText}</>;
};

export default TypeWriter;