import TeacherCard from "@/components/teachers/TeacherCard"

const teachers = [
  {
    name: "Mr. John Smith",
    role: "IELTS Trainer",
    avatar: "teacher1.jpg",
    certificates: ["IELTS 8.5", "TESOL"],
    experience: "8 năm giảng dạy IELTS & giao tiếp",
    strengths: [
      "Lộ trình cá nhân hóa",
      "Chiến lược làm bài IELTS",
      "Sửa bài chi tiết"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ms. Anna Nguyen",
    role: "Business English Trainer",
    avatar: "teacher2.jpg",
    certificates: ["CELTA", "Business English"],
    experience: "6 năm đào tạo tiếng Anh doanh nghiệp",
    strengths: [
      "Giao tiếp công sở",
      "Email & thuyết trình",
      "Đào tạo theo ngành"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Ms. Lisa Tran",
    role: "Business English Trainer",
    avatar: "teacher3.jpg",
    certificates: ["CELTA", "Business English"],
    experience: "6 năm đào tạo tiếng Anh doanh nghiệp",
    strengths: [
      "Giao tiếp công sở",
      "Email & thuyết trình",
      "Đào tạo theo ngành"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export default function TeachersPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Đội ngũ giáo viên tại TEC
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Giáo viên chất lượng cao – giàu kinh nghiệm – tận tâm
            trong từng buổi học.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  )
}
