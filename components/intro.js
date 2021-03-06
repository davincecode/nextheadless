import { PROJ_NAME, CMS_URL } from "../lib/constants"

export default function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:flex-row md:justify-between md:mb-12">
      <h1 className="text-6xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8">
        TheNeverType.
      </h1>
      <h4 className="mt-5 text-lg text-center md:text-left md:pl-8">
        A Blog Portfolio using Next.js with Wordpress Headless CMS.
      </h4>
    </section>
  )
}
