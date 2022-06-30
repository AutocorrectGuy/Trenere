import image from "../../../assets/base64/yoga_1.jpg"

function Heading() {
  return (
    <div className="text-white text-5xl font-extrabold py-10 mx-auto">
      GALLERY
    </div>
  )
}

function ImagesSet() {
  return (
    <div className="w-full border border-green-500">
      <ImageContainer img={"https://picsum.photos/300"} translateX={0} translateY={0} />
      <ImageContainer img={"https://picsum.photos/301"} translateX={0} translateY={0} />
    </div>
  )
}

function ImageContainer({ translateX, translateY, img }) {
  const size = 300;

  return (
    <div className="flex my-12 mx-24 p-5 items-center justify-center"
      style={{
        width: size, 
        height: size,
        transform: "rotate(45deg) translateX(0px) translateY(0px)"
      }}
    >
      <div className="absolute bg-white bg-opacity-25" 
      style={{width: size, height: size}}/>
      <div className="flex items-center justify-center w-full h-full overflow-hidden">
        <div className="-rotate-45 min-w-[141%] min-h-[141%] flex-shrink-0">
          <img src={img} className="flex w-full h-full"/>
        </div>
      </div>
    </div>
  )
}

export default function Section3() {
  return (
    <div className={"flex flex-col max-w-7xl w-full mx-auto bg-black mt-auto"}>
      <div className="relative h-[1650px]">
        <div className="absolute top-0 right-0 bottom-0 left-0 brightness-50"
          style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%, 0%" }}
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-pink-400 to-indigo-900 opacity-80 h-full w-full" />
        <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 h-full w-full">
          <Heading />
          <ImagesSet />
        </div>
      </div>
    </div>
  )
}