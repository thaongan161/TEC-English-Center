type Branch = {
  name: string
  address: string
  phone: string
  time: string
  map: string
}

export default function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div
      className="
        bg-white rounded-xl border border-gray-200
        shadow-sm hover:shadow-md transition
        p-6 grid md:grid-cols-2 gap-8
      "
    >
      {/* Info */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-900">
          {branch.name}
        </h3>

        <div className="mt-4 space-y-3 text-gray-700">
          <p>
            📍 <strong>Địa chỉ:</strong> {branch.address}
          </p>
          <p>
            ☎ <strong>Hotline:</strong>{" "}
            <a
              href={`tel:${branch.phone}`}
              className="text-blue-700 hover:underline"
            >
              {branch.phone}
            </a>
          </p>
          <p>
            ⏰ <strong>Thời gian làm việc:</strong> {branch.time}
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-64 rounded-lg overflow-hidden border">
        <iframe
          src={branch.map}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  )
}
