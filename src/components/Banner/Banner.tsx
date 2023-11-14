import banner from "@public/banner.png";
import { BannerImageCss } from "@components/Banner/Banner.styled";

export function Banner() {
  return <BannerImageCss src={banner} alt="banner" />;
}
