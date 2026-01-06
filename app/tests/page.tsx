import TestCard from "@/components/tests/TestCard"

const tests = [
  {
    title: "IELTS Listening Practice Test 01",
    exam: "IELTS",
    skill: "Listening",
    level: "Beginner",
    type: "PDF",
    file: "/files/ielts-listening-01.pdf",
    answer: true,
  },
  {
    title: "IELTS Reading Practice Test 02",
    exam: "IELTS",
    skill: "Reading",
    level: "Intermediate",
    type: "Online",
    file: "/tests/ielts-reading-02",
    answer: true,
  },
  {
    title: "TOEIC Reading Practice Test 01",
    exam: "TOEIC",
    skill: "Reading",
    level: "Basic",
    type: "PDF",
    file: "/files/toeic-reading-01.pdf",
    answer: false,
  },
]

export default function TestsPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Đề thi mẫu IELTS & TOEIC
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Bộ đề thi mẫu được biên soạn bởi đội ngũ giáo viên TEC,
            giúp học viên làm quen cấu trúc đề và đánh giá năng lực.
          </p>
        </div>

        {/* Test list */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <TestCard key={index} test={test} />
          ))}
        </div>
      </div>
    </section>
  )
}
