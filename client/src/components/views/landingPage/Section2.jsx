import React from "react";
import IMAGES from "../../../assets/base64/LandingPageImgs.json"

const DATA = [
  {
    "h1": "Algoritmizētas treniņu programmas",
    "h2": "Kā tas darbojas?",
    "p": "Vispirms ir jāaizpilda anketa un pēc tam tiek atlasīta atbilstoša informācija, kura nosaka to, kādas iespējas ievēles būs nākošajos anketas izpildes soļos. Anketa 100% balstīta uz zinātnisko literatūru sporta zinātnē. Izveidoto treniņu programmu iespējams apskatīt gan te, gan arī lejuplādēt .docx un pdf failu formātos.",
    "btnText": "Sāc tagad",
    "img": IMAGES[0]
  },
  {
    "h1": "Personalizētas treniņu programmas",
    "h2": "Balstoties uz padziļinātu personisko informāciju",
    "p": "Starting a fitness routine can be intimidating, but it helps to have an idea of what to expect before joining any class. Across the communities we serve nationwide, we offer an array of different group fitness class types to meet the dynamic needs of our communities.",
    "btnText": "Piesaki tagad",
    "img": IMAGES[1]
  },
  {
    "h1": "Privātie fitnesa treniņi",
    "h2": "About Yoga Classes",
    "p": "Yoga is our most commonly requested group fitness class, and most people are already familiar with the concept of it. This type of exercise has nearly a dozen variations of its own, with the most popular styles including Hot Yoga, to Vinyasa Flow, and Gentle Yoga.",
    "btnText": "Piesakies treniņam",
    "img": IMAGES[2]
  },
  {
    "h1": "Sadarbojies ar mums",
    "h2": "Atgriezensikā saite (feedback)",
    "p": "HIIT stands for High-Intensity Interval Training, and is an exercise strategy that alternates short periods of intense exercise movements, followed by less intense, but still active “recovery” periods.",
    "btnText": "Sadarbojies ar mums",
    "img": IMAGES[3]
  }
]

export default function Section2() {

  function RectanglePattern() {
    return (
      <div className="overflow-hidden">
        <Rectangle left={"-400px"} top={"150px"} />
        <Rectangle left={"800px"} top={"800px"} />
        <Rectangle left={"50%"} bottom={"-550px"} centerX={"-translate-x-1/2"} />
      </div>
    )
  }
  function Rectangle({ left, top, centerX, bottom }) {
    return (
      <div className={`${centerX && centerX}
        absolute z-0 w-[700px] h-[700px] border-[60px] border-neutral-200 rotate-45 opacity-50`}
        style={{ left: left, top: top, bottom: bottom }} />
    )
  }
  function Heading() {
    return (
      <div 
        data-aos="fade-in"
        className="mb-20 text-5xl font-extrabold text-neutral-800 uppercase text-center">
        Mēs piedāvājam
        </div>
    )
  }
  function ImageContainer({ img }) {
    return (
      <div className="w-1/2">
        <div className="relative w-[370px] h-[370px] mx-auto">
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full brightness-150
        rounded-full"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "130%",
              backgroundPosition: "-15%"
            }}
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full 
          bg-gradient-to-b from-pink-400 to-indigo-900 rounded-full opacity-90"/>
          <div className="absolute mx-auto my-auto top-0 right-0 bottom-0 left-0 w-[290px] h-[290px] rounded-full">
            <img className="rounded-full" alt="" src={`${img}`} />
          </div>
        </div>
      </div>
    )
  }
  function TextContainer({ h1, h2, p, btnText }) {
    return (
      <div className="flex flex-col justify-around w-1/2">
        <div className="text-4xl text-center font-extrabold text-neutral-800 mx-auto">
          {h1}
        </div>
        <div className="text-2xl font-bold text-pink-500 mx-auto">
          {h2}
        </div>
        <div className="text-neutral-900 leading-5 ">
          {p}
        </div>
        <button className={`border border-pink-500 mx-auto mt-8 active:translate-y-[2px] shadow-lg shadow-pink-200 rounded-md`}>
          <div className={`text-pink-500 font-semibold px-8 py-4
            hover:bg-pink-500 hover:text-white transition-colors duration-200
          `}>
            {btnText}
          </div>
        </button>
      </div>
    )
  }
  function ContentContainer({ item, index }) {
    const { h1, h2, p, btnText, img } = item;
    return (
      <div
        data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
        className="flex justify-between max-w-[1300px] mx-auto py-10"
      >
        {
          index % 2 === 0
            ? <>
              <ImageContainer img={img} />
              <TextContainer h1={h1} h2={h2} p={p} btnText={btnText} />
            </>
            : <>
              <TextContainer h1={h1} h2={h2} p={p} btnText={btnText} />
              <ImageContainer img={img} />
            </>
        }

      </div>
    )
  }

  return (
    <div className="w-full bg-neutral-100 overflow-hidden" >

      <div className={"relative flex flex-col max-w-[1400px] w-full mx-auto bg-neutral-100 pb-20 pt-44"}>
        <RectanglePattern />
        <div className="flex flex-col z-[1]">
          <Heading />
          {
            DATA.map((item, i) =>
              <ContentContainer key={`landing-sec2-${i}`} item={item} index={i} />
            )
          }
        </div>
      </div>
    </div>
  )
}