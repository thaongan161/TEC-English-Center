type Course = {
  title: string
  badge: string
  description: string
  duration: string
  fee: string
  result: string
  image: string
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="
      bg-white rounded-xl border border-gray-200
      shadow-sm hover:shadow-md transition
      overflow-hidden
    ">
      {/* Image */}
      <div className="relative h-48">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${course.image})` }}
        />
        {/* overlay để chữ không bị chìm */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="
          inline-block text-sm font-medium
          text-blue-700 bg-blue-100
          px-3 py-1 rounded-full
        ">
          {course.badge}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-gray-900">
          {course.title}
        </h3>

        <p className="mt-2 text-gray-600 leading-relaxed">
          {course.description}
        </p>

        {/* Info */}
        <div className="mt-4 space-y-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
            <span className="w-5 text-center">⏱</span>
            <span>
            <strong>Thời lượng:</strong> {course.duration}
            </span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-5 text-center">💰</span>
            <span>
            <strong>Học phí:</strong> {course.fee}
            </span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-5 text-center">🎯</span>
            <span>
            <strong>Kết quả:</strong> {course.result}
            </span>
        </div>
        </div>


        {/* CTA */}
<div className="mt-6 flex gap-6">
  <a
    href="/#register"
    className="
      text-blue-700 font-medium
      hover:underline hover:text-blue-800
      transition
    "
  >
    Đăng ký ngay
  </a>

  <a
    href="/#register"
    className="
      text-blue-700 font-medium
      hover:underline hover:text-blue-800
      transition
    "
  >
    Nhận tư vấn
  </a>
</div>

      </div>
    </div>
  )
}
