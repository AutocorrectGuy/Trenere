import bgImage from "../../../assets/base64/yoga_1.png"
import img1 from "../../../assets/base64/s3_1.jpg"
import img2 from "../../../assets/base64/s3_2.jpg"
import img3 from "../../../assets/base64/s3_3.jpg"
import img4 from "../../../assets/base64/s3_4.jpg"
import img5 from "../../../assets/base64/s3_5.jpg"
import video_image from "../../../assets/base64/video_imae.png"
import message_image from "../../../assets/base64/message_image.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const IMAGES = [
  img1, img2, img3, img4, img5
]
const IMAGE_POSITIONS = [
  { x: 0, y: 0, z: 1 },
  { x: 0, y: 1, z: 2 },
  { x: 1, y: 1, z: 1 },
  { x: 0, y: 2, z: 1 },
  { x: 1, y: 2, z: 1 },

]
function Heading() {
  return (
    <div className="text-white text-4xl font-extrabold py-10 mx-auto">
      GALLERY
    </div>
  )
}

function ImagesSet() {
  const size = 280;
  const xOffset = 25;
  const yOffset = 50;

  function ImageContainer({ x, y, z, img }) {
    return (
      <div className="absolute flex my-12 mx-24 p-5 items-center justify-center  overflow-clip shadow-neutral-700 shadow-sm"
        style={{
          left: `${size * x * 0.9 + xOffset}px`,
          top: `${size * y * 0.7 + yOffset}px`,
          zIndex: z,
          width: size,
          height: size,
          transform: `rotate(45deg)`
        }}
      >
        <div className="absolute bg-neutral-400 bg-opacity-[25%]"
          style={{ width: size, height: size, backdropFilter: "blur(5px)" }}
        />
        <div className="flex items-center justify-center w-full h-full overflow-hidden">
          <div className="-rotate-45 min-w-[141%] min-h-[141%] flex-shrink-0">
            <img src={img}
              style={{ width: `${size * 1.41}px`, height: `${size * 1.41}px` }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        height: `${Math.ceil(size / 2) * IMAGE_POSITIONS.length}px`,
        width: `${size * 2.7}px`
      }}
    >
      {
        IMAGE_POSITIONS.map(({ x, y, z }, i) =>
          <ImageContainer
            key={`sec-3-img-${i}`}
            img={IMAGES[i]}
            x={x}
            y={y}
            z={z}
          />
        )
      }
    </div>
  )
}

function VideoContainer() {
  return (
    <div className="flex grow max-w-[400px] ml-auto mr-10">
      <div className="relative w-full my-auto">
        <div className="absolute flex w-full pb-[100%] rounded-full -translate-y-1/2 bg-neutral-400 bg-opacity-[25%]"
        >
          <div className="absolute w-[88%] h-[88%] left-[6%] top-[6%] my-autorounded-full">
            <img src={video_image} className="w-full h-full rounded-full" />
          </div>
          <div className={`absolute flex items-center justify-center w-[100px] h-[100px] left-0 right-0 mx-auto top-0 bottom-0 my-auto rounded-full
          bg-neutral-400 bg-opacity-[25%]`}
          >
            <div className="flex items-center justify-center w-[90px] h-[90px] rounded-full">
              <FontAwesomeIcon icon={faPlay} className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MessageSection() {

  function ImageLeft() {
    return (
      <div className="flex grow max-w-[400px] ml-auto mr-auto">
        <div className="relative w-full my-auto">
          <div className="absolute flex w-full pb-[100%] rounded-full -translate-y-1/2 bg-neutral-400 bg-opacity-[25%]"
          >
            <div className="absolute w-[88%] h-[88%] left-[6%] top-[6%] my-autorounded-full">
              <img src={message_image} className="w-full h-full rounded-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  function EmailSection() {
    return (
      <div className="flex flex-col justify-evenly w-7/12 h-full p-10">
        <div className="text-pink-600 text-3xl font-semibold">
          If you had a bad day, don't worry. Make it better by going to the gym.
        </div>
        <div className="text-white font-light">
          <div>
            We all have same ammount of hours in a day.
          </div>
          <div>
            Deciding how to use your hours is up to you.
          </div>
        </div>
        <div className="flex text-white font-medium">
          <input className="bg-indigo-300 bg-opacity-10 px-4 outline-white ring-1 ring-white placeholder:text-white max-w-[55%] w-full"
            type={"text"} placeholder={"Email"}
          />
          <button className={`px-8 py-4 bg-pink-600 text-white bg-opacity-75 ring-1 ring-white ml-4 hover:text-pink-600 
            hover:bg-white transition-colors duration-200`}
          >
            Join us
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex mt-40 h-[400px]">
      <ImageLeft />
      <EmailSection />
    </div>
  )
}

export default function Section3() {
  return (
    <div className="relative w-full bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-neutral-900 to-black opacity-90 h-full w-full brightness-50"
    />
      <div className={"flex flex-col max-w-[1400px] w-full mx-auto mt-auto overflow-hidden"}>
        <div className="relative h-[1500px]">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-neutral-400 to-black opacity-50 h-full w-full brightness-50" />
          <div className="absolute flex flex-col top-0 right-0 bottom-0 left-0 h-full w-full">
            <Heading />
            <div className="flex">
              <ImagesSet />
              <VideoContainer />
            </div>
            <MessageSection />
          </div>
        </div>
      </div>
    </div>
  )
}