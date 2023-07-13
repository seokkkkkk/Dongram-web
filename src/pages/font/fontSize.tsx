import { useEffect } from "react";

const useFontSize = () => {
  useEffect(() => {
    const resizer = () => {
      // 화면의 너비가 1440 이상일 때만 폰트 사이즈를 조절하고, 그 이하일 경우에는 1440을 기준으로 함
      const width = window.innerWidth > 1440 ? window.innerWidth : 1440;
      const fontSize = (width / 1920) * 10;

      document.documentElement.style.fontSize = `${fontSize}px`;
    };

    window.addEventListener("resize", resizer);
    resizer();

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);
};

export default useFontSize;
