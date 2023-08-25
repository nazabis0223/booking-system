import { Shell } from "@/components/shells/shell"

export function TeamSection() {
  return (
    <Shell
      as="section"
      variant="landingFullWidth"
      id="team"
      className="bg-[url('/images/svg/team-section-background.svg')] bg-cover bg-no-repeat"
    >
      {/* Top wave pattern */}
      <div>
        <img
          src="/images/svg/team-top-wave.svg"
          alt="Team section top wave pattern"
          className="w-full object-cover"
        />
      </div>

      {/* Section content */}
      <Shell as="div" variant="landingConstrained" className="mt-[48px]">
        <div className="flex items-center justify-center md:grid md:grid-cols-2 md:gap-[32px] lg:gap-[48px]">
          <h2 className="bg-gradient-to-br from-greenGradientFrom to-greenGradientTo bg-clip-text text-center font-[BalooTamma] font-bold leading-[1.05] text-transparent md:col-start-2 md:col-end-3">
            <span className="whitespace-nowrap text-[8.6vw] md:text-[4.8vw] w-1400:text-[70px]">
              Wykwalifikowana
            </span>
            <br />
            <span className="text-[7vw] md:whitespace-nowrap md:text-[4vw] w-1400:text-[57px]">
              i doświadczona kadra
            </span>
          </h2>
        </div>

        <div className="flex min-h-[600px] flex-col justify-center gap-[12vw] md:grid md:grid-cols-2 md:gap-[32px] lg:gap-[48px]">
          <div className="flex items-center justify-center">
            {/* <img src="/" alt='lek. wet. Piotr Surma' className="" /> */}
          </div>
          <div className=""></div>
        </div>
      </Shell>

      {/* Bottom wave pattern */}
      <div>
        <img
          src="/images/svg/team-bottom-wave.svg"
          alt="Team section bottom wave pattern"
          className="w-full object-cover"
        />
      </div>
    </Shell>
  )
}
