import BranchCard from "@/components/branches/BranchCard"

const branches = [
  {
    name: "TEC – Cơ sở Quận 1",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    phone: "0901 234 567",
    time: "Thứ 2 – Chủ nhật: 8:00 – 21:00",
    map: "https://www.google.com/maps?q=Nguyen+Hue+Quan+1&output=embed",
  },
  {
    name: "TEC – Cơ sở Quận 7",
    address: "456 Nguyễn Thị Thập, Quận 7, TP.HCM",
    phone: "0902 345 678",
    time: "Thứ 2 – Chủ nhật: 8:00 – 21:00",
    map: "https://www.google.com/maps?q=Nguyen+Thi+Thap+Quan+7&output=embed",
  },
]

export default function BranchesPage() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Hệ thống chi nhánh TEC
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Dễ dàng tìm trung tâm gần bạn – thuận tiện cho việc học tập
            và tư vấn trực tiếp.
          </p>
        </div>

        {/* Branch list */}
        <div className="mt-16 space-y-12">
          {branches.map((branch, index) => (
            <BranchCard key={index} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  )
}
