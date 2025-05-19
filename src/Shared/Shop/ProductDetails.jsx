import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import bg from './images/shop-bg.png';
import { productsData } from '../../Data/product';
import { FaCheck } from 'react-icons/fa';

const ProductDetails = () => {
  // const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImg, setActiveImg] = useState('');
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [qty, setQty] = useState(1);

  const id = 100001;

  /* fetch once */
  useEffect(() => {
    // fetch('/products.json')
    //   .then((r) => r.json())
    //   .then((d) => {
    //     const found = d.find((p) => p._id.toString() === id);
    //     setProduct(found);
    //     setActiveImg(
    //       found?.product?.[0]?.image ?? found?.colors?.[0]?.image ?? ''
    //     );
    //   });

    const found = productsData.find((p) => p._id.toString() === id.toString());
    setProduct(found);
    setActiveImg(found?.product?.[0]?.image ?? found?.colors?.[0]?.image ?? '');
  }, [id]);

  console.log(product);

  if (!product) return <div className="p-20 text-center">Loading…</div>;

  /* helpers */
  const hasDiscount = product.discount > 0;
  const sale = hasDiscount
    ? (product.price * (1 - product.discount / 100)).toFixed(0)
    : product.price;
  const save = hasDiscount ? (product.price - sale).toFixed(0) : 0;

  const thumbs = [...(product.product ?? []), ...(product.colors ?? [])].slice(
    0,
    4
  );

  console.log(thumbs);

  const changeColor = (c) => {
    setActiveColor(c);
    setActiveImg(c.image);
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen">
      {/* hero banner */}
      <div
        className="relative h-[400px] lg:h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)), url(${bg})`,
        }}
      >
        <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
          {product.name}
        </h1>
      </div>

      {/* main */}
      <div className="max-w-[1400px] mx-auto px-4 lg:flex gap-20 py-12 mt-20">
        {/* LEFT column */}
        <div className="lg:w-1/2 flex gap-4">
          {/* thumbnails */}
          <div className="flex lg:flex-col gap-6">
            {thumbs.map(({ image }, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(image)}
                className={`overflow-hidden w-20 h-20 lg:w-36 lg:h-36 bg-[#f0ecec] border rounded transition-all duration-200
                          ${
                            activeImg === image
                              ? 'border-[#2f3133]'
                              : 'border-transparent'
                          }`}
              >
                <img
                  src={image}
                  alt=""
                  className="object-cover object-center w-full h-full"
                />
              </button>
            ))}
          </div>

          {/* Main image + zoom pane to the RIGHT */}
          <div className="flex-1 flex items-center">
            <div className="object-contain border bg-[#f0ecec] w-full">
              {' '}
              {/* fixed tall wrapper */}
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: product.name,
                    isFluidWidth: true,
                    src: activeImg,
                    // sizes: '(max-width: 768px) 100vw, 50vw', // optional responsive hint
                  },
                  largeImage: {
                    src: activeImg,
                    width: 1200, // ← REAL pixel width
                    height: 1000, // ← REAL pixel height
                  },
                  enlargedImagePosition: 'beside',
                  enlargedImageContainerDimensions: {
                    width: '120%', // zoom pane width beside small image
                    height: '100%', // same 600 px height
                  },
                  enlargedImageContainerStyle: {
                    background: '#fff',
                    boxShadow: '0 0 8px rgba(0,0,0,.15)',
                  },
                  lensStyle: { background: 'rgba(255,255,255,.3)' },
                  // imageClassName: '', // small img fit
                }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT column */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h2 className="text-lg uppercase">{product.name}</h2>
          {/* <p className="text-3xl font-semibold pt-2 ">{product.title}</p> */}

          {/* price */}
          <p className="text-2xl font-semibold mb-6 mt-4 border-b pb-4">
            <span className="text-[#9E6747]">Tk.</span> {sale}
            {hasDiscount && (
              <>
                <span className="text-gray-500 line-through ml-3 text-lg font-normal">
                  Tk. {save}
                </span>{' '}
                {/* <span className="text-black text-lg pl-1">You save:</span>{' '} */}
              </>
            )}
          </p>

          {/* color picker */}
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-semibold">Color:</h3>
            <div className="flex gap-3">
              {(product.colors ?? []).map((c) => (
                <button
                  key={c.name}
                  onClick={() => changeColor(c)}
                  style={{
                    backgroundColor: c.name,
                    borderColor:
                      c?.name === activeColor?.name ? '#2f3133' : 'transparent',
                  }}
                  className="relative w-5 h-5 rounded-full cursor-pointer"
                  title={c.name}
                >
                  {c?.name === activeColor?.name && (
                    <FaCheck className="absolute inset-0 m-auto text-xs text-white" />
                  )}
                  {!c && (
                    <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-[ping_1s_ease-in-out_3]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* size picker */}
          <h3 className="font-semibold mb-2">Size:</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {[37, 38, 39, 41, 42, 43].map((sz) => (
              <button
                key={sz}
                onClick={() => setActiveSize(sz)}
                className={`w-12 h-12 flex items-center justify-center border rounded 
                  ${
                    activeSize === sz
                      ? ' text-black border-[#9E6747]'
                      : 'border-gray-300'
                  }`}
              >
                {sz}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {/* quantity */}
            <div className="flex items-center gap-4">
              <div className="border rounded flex items-center justify-center">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-11 border-r flex items-center justify-center cursor-pointer"
                >
                  −
                </button>
                <span className="min-w-[2ch] px-[15px] text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-9 h-11 border-l  flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between gap-14">
              <div className="w-full">
                <button
                  // disabled={product.stock !== 'in' || !activeSize}
                  className="px-12 py-2 w-full bg-green-900 text-white text-2xl disabled:opacity-40 rounded"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <p className="mt-2">Left of stock 3</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
