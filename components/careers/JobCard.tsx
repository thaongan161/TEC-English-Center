type Job = {
  title: string
  description: string
  requirements: string[]
  benefits: string[]
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div
      className="
        bg-white rounded-xl border border-gray-200
        shadow-sm hover:shadow-md transition
        p-8
      "
    >
      <h3 className="text-2xl font-semibold text-gray-900">
        {job.title}
      </h3>

      <p className="mt-3 text-gray-600">
        {job.description}
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-gray-700">
        {/* Requirements */}
        <div>
          <h4 className="font-semibold mb-2">📌 Yêu cầu</h4>
          <ul className="space-y-1">
            {job.requirements.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="font-semibold mb-2">🎁 Quyền lợi</h4>
          <ul className="space-y-1">
            {job.benefits.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="/#apply"
          className="text-blue-700 font-medium hover:underline"
        >
          Ứng tuyển ngay →
        </a>
      </div>
    </div>
  )
}
