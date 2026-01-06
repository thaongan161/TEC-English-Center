import JobCard from "@/components/careers/JobCard"

const jobs = [
  {
    title: "Giáo viên IELTS",
    description: "Giảng dạy các lớp IELTS theo lộ trình của trung tâm.",
    requirements: [
      "IELTS 7.5+ hoặc tương đương",
      "Có chứng chỉ TESOL / CELTA là lợi thế",
      "Kỹ năng sư phạm và giao tiếp tốt",
    ],
    benefits: [
      "Thu nhập hấp dẫn theo năng lực",
      "Môi trường làm việc chuyên nghiệp",
      "Cơ hội phát triển chuyên môn",
    ],
  },
  {
    title: "Giáo viên Tiếng Anh Giao tiếp",
    description: "Giảng dạy tiếng Anh giao tiếp cho sinh viên và người đi làm.",
    requirements: [
      "Phát âm chuẩn, giao tiếp tốt",
      "Ưu tiên có kinh nghiệm giảng dạy",
      "Nhiệt tình, trách nhiệm",
    ],
    benefits: [
      "Lịch dạy linh hoạt",
      "Thu nhập ổn định",
      "Được đào tạo phương pháp giảng dạy",
    ],
  },
  {
    title: "Nhân viên Tư vấn tuyển sinh",
    description: "Tư vấn khóa học và hỗ trợ học viên đăng ký.",
    requirements: [
      "Kỹ năng giao tiếp tốt",
      "Ưu tiên có kinh nghiệm sales / tư vấn",
      "Thái độ tích cực, cầu tiến",
    ],
    benefits: [
      "Lương + hoa hồng",
      "Đào tạo kỹ năng tư vấn",
      "Môi trường năng động",
    ],
  },
]

export default function CareersPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Tuyển dụng tại TEC
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Gia nhập đội ngũ TEC – cùng chúng tôi xây dựng môi trường
            học tập chuyên nghiệp và truyền cảm hứng.
          </p>
        </div>

        {/* Job list */}
        <div className="mt-16 space-y-10">
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-20 text-center">
          <p className="text-gray-700">
            Không tìm thấy vị trí phù hợp?
          </p>
          <a
            href="/#contact"
            className="mt-3 inline-block text-blue-700 font-medium hover:underline"
          >
            Gửi CV cho chúng tôi
          </a>
        </div>
      </div>
    </section>
  )
}
