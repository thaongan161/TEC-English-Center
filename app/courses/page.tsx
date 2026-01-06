import CourseCard from "@/components/courses/CourseCard"

const courses = [
  {
    title: "Tiếng Anh Giao tiếp",
    badge: "Người đi làm • Sinh viên",
    description:
      "Phát triển phản xạ nghe – nói, giao tiếp tự tin trong đời sống & công việc.",
    duration: "3 – 6 tháng",
    fee: "3 – 6 triệu",
    result: "Tự tin giao tiếp hằng ngày",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
  },
  {
    title: "IELTS / TOEIC",
    badge: "Luyện thi chứng chỉ",
    description:
      "Chiến lược học bài bản, luyện 4 kỹ năng, cam kết đầu ra rõ ràng.",
    duration: "4 – 8 tháng",
    fee: "6 – 15 triệu",
    result: "IELTS 6.5+ / TOEIC 700+",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    title: "Tiếng Anh Trẻ em",
    badge: "Trẻ em 6–12 tuổi",
    description:
      "Học qua trò chơi, phát triển toàn diện 4 kỹ năng từ sớm.",
    duration: "6 – 12 tháng",
    fee: "4 – 8 triệu",
    result: "Nền tảng tiếng Anh vững chắc",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
  {
    title: "Tiếng Anh Doanh nghiệp",
    badge: "Doanh nghiệp",
    description:
      "Tiếng Anh giao tiếp, email, họp, thuyết trình trong môi trường công việc.",
    duration: "Theo nhu cầu",
    fee: "Báo giá riêng",
    result: "Ứng dụng hiệu quả trong công việc",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
]

export default function CoursesPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Chương trình đào tạo tại TEC
          </h1>

          <p className="mt-4 text-base md:text-lg text-gray-600">
            Các khóa học được thiết kế bài bản, lộ trình rõ ràng,
            phù hợp cho mọi độ tuổi và mục tiêu học tập.
          </p>
        </div>

        {/* Course list */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
