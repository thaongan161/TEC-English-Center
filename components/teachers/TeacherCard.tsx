"use client"
import { useState } from "react"

type Teacher = {
  name: string
  role: string
  avatar: string
  certificates: string[]
  experience: string
  strengths: string[]
  video?: string
}

export default function TeacherCard({ teacher }: { teacher: Teacher }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="
        bg-white rounded-xl border border-gray-200
        shadow-sm hover:shadow-md transition
        overflow-hidden
      ">
        {/* Avatar */}
        <img
          src={teacher.avatar}
          alt={teacher.name}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {teacher.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {teacher.role}
          </p>

          {/* Certificates */}
          <div className="mt-3 flex flex-wrap gap-2">
            {teacher.certificates.map((cert, i) => (
              <span
                key={i}
                className="text-xs font-medium text-blue-700 bg-blue-100 px-3 py-1 rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>

          {/* Experience */}
          <p className="mt-4 text-sm text-gray-600">
            <strong>Kinh nghiệm:</strong> {teacher.experience}
          </p>

          {/* Strengths */}
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            {teacher.strengths.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          {/* Video */}
          {teacher.video && (
            <button
              onClick={() => setOpen(true)}
              className="mt-5 text-blue-700 font-medium hover:underline"
            >
              ▶ Xem video giới thiệu
            </button>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-2xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h4 className="font-semibold">{teacher.name}</h4>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="aspect-video">
              <iframe
                src={teacher.video}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
