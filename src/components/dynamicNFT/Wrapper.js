import React, { useEffect, useRef, useState } from "react";
import "./Wrapper.css"; // Import your CSS file
import Canvas from "./Canvas";
import html2canvas from "html2canvas";

const Wrapper = ({ input }) => {
  const [canvas, setCanvas] = useState(null);
  const [imgUrl, setImgUrl] = useState();
  const textElementRef = useRef(null);
  const contentRef = useRef(null);
  const wrapperElementRef = useRef(null);
  const [fontForName, setFontForName] = useState(40);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    if (input) adjustFontSize();
    else if (!input) {
      // textElementRef.current.style.fontSize = "64px";
    }
  }, [input]);

  const horizontalPadding = 20 * 2;

  const adjustFontSize = () => {
    const wrapperWidth = wrapperElementRef.current.clientWidth;

    const textWidth = textElementRef.current.scrollWidth;
    console.log("textWidth", textWidth);
    const parentWidth = wrapperWidth - horizontalPadding;
    console.log("parentWidth", parentWidth);

    let fontSize = fontForName;
    textElementRef.current.style.fontSize = `${fontSize}px`;

    while (textElementRef.current.scrollWidth > parentWidth && fontSize > 16) {
      fontSize--;
      textElementRef.current.style.fontSize = `${fontSize}px`;
    }
  };
  const handleDownload = async () => {
    const wrapperElement = document.querySelector(".wrapper");

    if (wrapperElement) {
      try {
        const canvas2 = await html2canvas(wrapperElement, {
          width: 500,
          height: 500,
        });
        const imgUrl = canvas2.toDataURL("image/png");

        const downloadLink = document.createElement("a");
        downloadLink.href = imgUrl;
        downloadLink.download = "downloaded_image.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } catch (error) {
        console.error("Error converting to canvas:", error);
      }
    }
  };
  return (
    <>
      <div className="wrapper" ref={wrapperElementRef}>
        <div className="content" ref={contentRef}>
          {!input ? <div className="overlay"></div> : null}
          <Canvas
            input={input}
            setImgUrl={setImgUrl}
            imgUrl={imgUrl}
            isPremium={isPremium}
            setCanvas={setCanvas}
            canvas={canvas}
          />
          {input ? (
            <div
              className={`text-wrapper ${
                isPremium
                  ? "PremiumyellowBackgroundText"
                  : "NormalblackBackgroundText"
              }`}
            >
              <p ref={textElementRef} style={{ fontSize: `${fontForName}px` }}>
                {input ? `${input}.mode` : ".mode"}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      {/* {input ? (
        <div className="mainNFTDiv hidden">
          <img
            src={canvas ? canvas.toDataURL() : ""}
            alt=""
            className="nftGenImg"
          />
          <div
            className={`text-wrapper ${
              isPremium
                ? "PremiumyellowBackgroundText"
                : "NormalblackBackgroundText"
            }`}
          >
            <p ref={textElementRef} style={{ fontSize: `${fontForName}px` }}>
              {input ? `${input}.mode` : ".mode"}
            </p>
          </div>
        </div>
      ) : null} */}
      {/* <button onClick={handleDownload}>Download</button> */}
    </>
  );
};

export default Wrapper;
