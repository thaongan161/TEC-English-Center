type Test = {
  title: string
  exam: string
  skill: string
  level: string
  type: string
  file: string
  answer: boolean
}

export default function TestCard({ test }: { test: Test }) {
  return (
    <div className="
      bg-white rounded-xl border border-gray-200
      shadow-sm hover:shadow-md transition
      p-6
    ">
      <h3 className="text-lg font-semibold text-gray-900">
        {test.title}
      </h3>

      {/* Meta info */}
      <div className="mt-3 space-y-1 text-sm text-gray-700">
        <p>📘 <strong>Kỳ thi:</strong> {test.exam}</p>
        <p>🧠 <strong>Kỹ năng:</strong> {test.skill}</p>
        <p>📊 <strong>Mức độ:</strong> {test.level}</p>
        <p>📝 <strong>Hình thức:</strong> {test.type}</p>
        <p>
          ✅ <strong>Đáp án:</strong>{" "}
          {test.answer ? "Có" : "Chưa có"}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-5 flex gap-4">
        <a
          href={test.file}
          className="text-blue-700 font-medium hover:underline"
        >
          {test.type === "PDF" ? "Tải đề" : "Làm online"}
        </a>

        {test.answer && (
          <a
            href={test.file}
            className="text-blue-700 font-medium hover:underline"
          >
            Xem đáp án
          </a>
        )}
      </div>
    </div>
  )
}
