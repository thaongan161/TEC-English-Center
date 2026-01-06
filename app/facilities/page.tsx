import ParallaxSection from "@/components/ParallaxSection"

export default function FacilitiesPage() {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588072432836-e10032774350)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Cơ sở vật chất hiện đại tại TEC
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Không gian học tập an toàn – thân thiện –  
            tạo cảm hứng cho học viên mỗi ngày.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <ParallaxSection
        title="Phòng học hiện đại"
        description="Phòng học rộng rãi, ánh sáng tự nhiên, trang bị bảng thông minh và máy chiếu giúp học viên tiếp thu hiệu quả."
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
      />

      {/* Section 2 */}
      <ParallaxSection
        reverse
        title="Trang thiết bị giảng dạy"
        description="Hệ thống âm thanh, màn hình và giáo cụ hiện đại hỗ trợ tối đa cho việc học và thực hành tiếng Anh."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      />

      {/* Section 3 */}
      <ParallaxSection
        title="Thư viện & học liệu"
        description="Kho tài liệu phong phú, sách và học liệu được cập nhật thường xuyên, phục vụ việc tự học."
        image="https://images.unsplash.com/photo-1507842217343-583bb7270b66"
      />

      {/* Section 4 */}
      <ParallaxSection
        reverse
        title="Không gian sinh hoạt"
        description="Không gian mở, thân thiện để học viên giao lưu, thực hành và xây dựng sự tự tin khi sử dụng tiếng Anh."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      />
    </main>
  )
}
