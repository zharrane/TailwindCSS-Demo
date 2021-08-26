import React from "react"
import Card from "./components/Card"
import popularDestinations from "./data/popularDestinations"

const App = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-2 2xl:grid-cols-5">
        <div
          className="
      2xl:col-span-2
      px-8
      py-12
      max-w-md
      mx-auto
      sm:max-w-xl
      lg:px-12 lg:py-24 lg:max-w-full
      xl:mx-0
    "
        >
          <div className="xl:max-w-xl xl:mr-0">
            <img
              className="h-10"
              src="https://raw.githubusercontent.com/zharrane/TailwindCSS-Demo/a65d9f389a84e74b3d8985906cfdf41300e8db59/img/logo.svg"
              alt="Logo"
            />
            <img
              className="
               lg:hidden
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8 sm:h-64 sm:w-full sm:object-center sm:object-cover"
              src="https://raw.githubusercontent.com/zharrane/TailwindCSS-Demo/master/img/beach-work.jpg"
              alt="Beach"
            />
            <h1
              className="
          object-center
          mt-6
          text-2xl
          font-bold
          text-gray-900
          sm:object-cover sm:mt-8 sm:text-4xl
          lg:text-3xl
          xl:text-4xl
        "
            >
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500"> take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              facilis porro voluptatum sed fugiat libero, voluptas molestiae
              fugit quaerat nobis commodi voluptatibus obcaecati cumque!
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="
            btn btn-primary
            shadow-lg
            hover:-translate-y-0.5
            transition
            transform
          "
                href="#"
              >
                Book your escape
              </a>
              <a className="btn btn-secondary" href="#">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object center"
            src="https://raw.githubusercontent.com/zharrane/TailwindCSS-Demo/master/img/beach-work.jpg"
            alt="Beach"
          />
        </div>
      </div>
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et incidunt
          temporibus eligendi vel, eum voluptate! Possimus aut, pariatur,
          provident architecto veniam facilis ipsam culpa sed exercitationem quo
          a! Voluptate, ullam.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((pop) => {
            return <Card key={pop.city} cardData={pop} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
