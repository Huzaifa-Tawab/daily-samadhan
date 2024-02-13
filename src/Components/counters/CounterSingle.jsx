import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function CounterSingle({ start, end, duration }) {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef();

  const onVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  useEffect(() => {
    if (isVisible && countUpRef.current) {
      // Start the count-up animation when the element becomes visible
      countUpRef.current.start();
    }
  }, [isVisible]);

  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      {({ isVisible }) => (
        <CountUp start={start} end={end} duration={duration}>
          {({ countUpRef, start }) => (
            isVisible && start(),
            (<span className="counter-numbers" ref={countUpRef} />)
          )}
        </CountUp>
      )}
    </VisibilitySensor>
  );
}
