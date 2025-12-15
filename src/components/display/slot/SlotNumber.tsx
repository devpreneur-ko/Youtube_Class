import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";

type PropsType = {
  isStart?: boolean; // 외부에서 전달받은 시작 상태 (뷰포트 감지 결과 등)
  startNumber: number;
  endNumber: number;
  duration?: number;
};

const SlotNumber = ({ isStart, startNumber, endNumber, duration = 2.75 }: PropsType) => {
  // CountUp의 start 함수를 저장하기 위한 ref
  const countUpStartRef = useRef<(() => void) | null>(null);
  // 중복 실행 방지를 위한 ref
  const hasStartedRef = useRef(false);

  // isStart가 true가 되면 CountUp 시작
  useEffect(() => {
    if (isStart && countUpStartRef.current && !hasStartedRef.current) {
      countUpStartRef.current();
      hasStartedRef.current = true;
    }
  }, [isStart]);

  return (
    <CountUp start={startNumber} end={endNumber} duration={duration} separator="," decimals={0} decimal=",">
      {({ countUpRef, start }) => {
        // start 함수를 ref에 저장
        countUpStartRef.current = start;
        return <span ref={countUpRef} />;
      }}
    </CountUp>
  );
};

export default SlotNumber;
