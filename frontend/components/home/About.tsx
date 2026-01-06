import Link from "next/link";

export default function About() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ================= GIỚI THIỆU ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Về Trung tâm Anh ngữ TEC
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              TEC là trung tâm đào tạo tiếng Anh uy tín dành cho học sinh,
              sinh viên và người đi làm. Chúng tôi tập trung xây dựng
              lộ trình học cá nhân hóa, phương pháp giảng dạy hiện đại
              và môi trường học tập truyền cảm hứng.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Giáo viên chuyên môn cao, giàu kinh nghiệm</li>
              <li>✔ Lộ trình rõ ràng – cam kết đầu ra</li>
              <li>✔ Môi trường học tập hiện đại, thân thiện</li>
            </ul>
          </div>

          <div className="relative h-80 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Lớp học tại TEC"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 text-center">
            Hành trình phát triển
          </h3>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {[
              { year: "2018", text: "Thành lập TEC, khai giảng các lớp đầu tiên" },
              { year: "2020", text: "Mở rộng chương trình IELTS & TOEIC" },
              { year: "2022", text: "Đào tạo tiếng Anh doanh nghiệp" },
              { year: "2024", text: "Phát triển hệ thống nhiều chi nhánh" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-blue-700">
                  {item.year}
                </div>
                <p className="mt-2 text-gray-600 text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= CHỨNG NHẬN / ĐỐI TÁC ================= */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 text-center">
            Chứng nhận & Đối tác
          </h3>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
            <img src="https://dummyimage.com/200x80/ccc/000&text=IELTS" alt="IELTS" />
            <img src="https://dummyimage.com/200x80/ccc/000&text=TOEIC" alt="TOEIC" />
            <img src="https://dummyimage.com/200x80/ccc/000&text=Cambridge" alt="Cambridge" />
            <img src="https://dummyimage.com/200x80/ccc/000&text=TESOL" alt="TESOL" />
          </div>
        </div>

        {/* ================= HÌNH ẢNH THỰC TẾ ================= */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 text-center">
            Hình ảnh lớp học thực tế
          </h3>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1588072432836-e10032774350",
              "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7",
            ].map((img, i) => (
              <div key={i} className="h-64 rounded-xl overflow-hidden">
                <img
                  src={img}
                  alt="Hoạt động lớp học TEC"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="text-center bg-blue-50 rounded-2xl py-16 px-6">
          <h3 className="text-3xl font-semibold text-gray-900">
            Trải nghiệm môi trường học tập tại TEC
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            Đăng ký học thử miễn phí để được tư vấn lộ trình phù hợp
            với mục tiêu của bạn.
          </p>

          <Link
            href="/register"
            className="
              inline-block mt-8
              bg-orange-500 text-white font-semibold
              px-8 py-4 rounded-xl
              hover:bg-orange-600 transition
            "
          >
            Đăng ký học thử miễn phí
          </Link>
        </div>

      </div>
    </section>
  );
}
