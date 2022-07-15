import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function SignUpBtn({className}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className={`
        border border-neutral-400 hover:bg-pink-600 hover:border-pink-600
        text-white active:bg-pink-600 font-medium uppercase 
        px-4 py-2 rounded shadow hover:shadow-lg outline-none
        focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
        active:translate-y-[2px] 
        ${className !== undefined && className}`}
        type="button"
        onClick={() => setShowModal(true)}
      >
        Reģistrējies
      </button>
      {showModal ? (
        <>
          <div
            className=" bg-black bg-opacity-80 justify-center items-center flex overflow-x-hidden 
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative flex flex-col my-6 mx-auto max-w-md w-full">
              {/*content*/}
              <div className="rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none shadow-lg shadow-neutral-700">
                {/*header*/}
                <div className="relative flex bg-white items-center justify-center w-full min-h-[120px] p-0 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl text-neutral-700 text-center font-bold">
                    Lietotāja reģistrācija
                  </h3>
                  <button className="absolute right-0 top-0 m-3"
                    onClick={() => setShowModal(false)}
                  >
                    <FontAwesomeIcon icon={faWindowClose} className={"text-red-600 w-6 h-6 hover:text-red-400"} />
                  </button>
                </div>
                {/*body*/}

                <form className="flex flex-col w-full p-5">
                <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Lietotājvārds"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Epasts"
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Parole"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="password"
                      className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Atkārtojiet paroli"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  >
                    Reģistrēties
                  </button>

                  <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                  >
                    <p className="text-center text-neutral-800 font-semibold mx-4 mb-0">VAI</p>
                  </div>

                  <a
                    className="flex items-center justify-center py-3 w-full bg-blue-600 hover:bg-blue-700 rounded-md"
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faFacebook} className={"w-5 h-5 pr-2"} />
                    <div className="whitespace-nowrap">Reģistrēties ar Facebook</div>
                  </a>
                  <a
                    className="flex items-center justify-center py-3 w-full bg-[#C4402F] hover:bg-[#a73526] rounded-md mt-2"
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faGoogle} className={"w-5 h-5 pr-2"} />
                    <div className="whitespace-nowrap">Reģistrēties ar Google</div>
                  </a>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}