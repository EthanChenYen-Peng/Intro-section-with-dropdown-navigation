import heroImage from '../../images/image-hero-mobile.png'
import dataBizImage from '../../images/client-databiz.svg'
import audioPhileImage from '../../images/client-audiophile.svg'
import meetImage from '../../images/client-meet.svg'
import makerImage from '../../images/client-maker.svg'

const clientImages = [dataBizImage, audioPhileImage, meetImage, makerImage]
function Hero() {
  return (
    <div className="flex flex-col gap-8">
      <img src={heroImage} className="w-full object-cover" />
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-extrabold">Make remote work</h1>
        <p className="my-5 text-center text-medium-gray">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="rounded-2xl bg-almost-black px-5 py-4 text-xl text-almost-white">
          Learn more
        </button>

        <div className="mt-10 flex items-center gap-2">
          {clientImages.map((client, index) => (
            <div className="flex-1 p-1" key={index}>
              <img src={client} className="w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
