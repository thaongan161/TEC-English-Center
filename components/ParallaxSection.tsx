type ParallaxSectionProps = {
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function ParallaxSection({
  title,
  description,
  image,
  reverse = false,
}: ParallaxSectionProps) {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 w-screen
        flex ${reverse ? "justify-end" : "justify-start"}`}
      >
        <div className="w-full md:w-1/2 rounded-2xl bg-black/50 p-6">
          <h2 className="text-3xl font-semibold text-whhite">
            {title}
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
