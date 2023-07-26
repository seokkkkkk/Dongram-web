//Styled 완료
import banner from "@public/placeholder.png";
import Image from "next/image";
import styled from "@emotion/styled";

const BannerImageCss = styled(Image)`
  width: 95.8rem;
  height: 11.8rem;
  margin-top: 1.8rem;
  margin-bottom: 3.4rem;
`;

export function Banner() {
  return <BannerImageCss src={banner} alt="banner" />;
}
