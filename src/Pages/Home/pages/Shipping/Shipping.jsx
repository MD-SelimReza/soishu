import shop from './images/2.svg';
import shipping from './images/1.svg';
import pay from './images/3.svg';
export const Shipping = () => {
  return (
    <div className="max-w-[1400px] mx-auto mb-20 md:mb-32">
      <div className="flex flex-wrap justify-evenly items-center h-full">
        <div className="">
          <img src={shipping} className="w-24  mx-auto" alt="" />
          <h1 className="text-lg uppercase font-semibold text-center ">
            shipping & return
          </h1>
          <h1 className="text-gray-400 text-lg text-center">
            Hassle-free returns, no questions asked.
          </h1>
        </div>
        <div className="">
          <img src={shop} className="w-24  mx-auto" alt="" />
          <h1 className="text-lg uppercase font-semibold text-center ">
            SHOP WITH CONFIDENCE
          </h1>
          <h1 className="text-gray-400 text-lg text-center">
            Protected from purchase to doorstep.
          </h1>
        </div>

        <div className="">
          <img src={pay} className="w-20  mx-auto" alt="" />
          <h1 className="text-lg uppercase font-semibold text-center ">
            SAFE PAYMENT
          </h1>
          <h1 className="text-gray-400 text-lg text-center">
            Secure checkout every step of the way.
          </h1>
        </div>
      </div>
    </div>
  );
};
