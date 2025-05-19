import ProductDetails from '../../Shared/Shop/ProductDetails';
import { Shop } from '../../Shared/Shop/Shop';
import { VideoSection } from '../VideoSection/VideoSection';
import { Banner } from './Banner';
import { DontMiss } from './pages/DontMiss/DontMiss';
import { FaqSection } from './pages/FaqSection/FaqSection';
import { New } from './pages/New/New';
import { Offer } from './pages/Offer/Offer';
import { Shipping } from './pages/Shipping/Shipping';

export const Index = () => {
  return (
    <div className="">
      <Banner />
      <ProductDetails />
      <Offer />
      <Shipping />
      {/* <New /> */}
      {/* <Shop /> */}
      <VideoSection />
      <FaqSection />
      {/* <DontMiss /> */}
    </div>
  );
};
