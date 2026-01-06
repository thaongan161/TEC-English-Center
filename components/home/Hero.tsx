"use client"

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1588072432836-e10032774350)",
      }}
    >
      <div className="bg-black/60 py-28">
        <div className="container mx-auto px-6 md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Nâng tầm tiếng Anh – Mở rộng tương lai
          </h1>
          <p className="mt-5 text-lg">
            Trung tâm Anh ngữ uy tín – Lộ trình rõ ràng – Cam kết đầu ra
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="register"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded font-semibold"
            >
              Đăng ký ngay
            </a>
            <a
              href="register"
              className="border border-white px-6 py-3 rounded"
            >
              Học thử miễn phí
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
