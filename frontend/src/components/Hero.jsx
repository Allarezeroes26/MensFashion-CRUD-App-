import photo from "../assets/fashionphoto.jpg"

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row min-h-[70vh] border border-gray-300">

      {/* LEFT CONTENT */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-6 sm:px-12">
        <div className="max-w-xl">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[3px] bg-black"></span>
            <p className="font-paragraph text-sm tracking-widest uppercase text-gray-600">
              Menskit
            </p>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            All Things Men. <br /> One Place.
          </h1>

          {/* Subtitle */}
          <p className="font-paragraph text-gray-600 text-base sm:text-lg mb-8">
            Discover fashion, gear, and everyday essentials curated for modern men.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white font-paragraph text-sm tracking-wide hover:bg-gray-800 transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border border-black text-black font-paragraph text-sm tracking-wide hover:bg-black hover:text-white transition">
              Explore Collection
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full sm:w-1/2 h-[40vh] sm:h-auto">
        <img
          src={photo}
          alt="Mens Fashion"
          className="w-full h-full object-cover"
        />
      </div>

    </section>
  )
}

export default Hero
