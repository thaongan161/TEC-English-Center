"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);

    alert("Cảm ơn bạn! TEC sẽ liên hệ tư vấn sớm nhất.");
    setForm({ name: "", phone: "", email: "" });
  };

  return (
    <section
      id="register"
      className="
        min-h-screen w-full
        bg-orange-500
        flex items-center justify-center
      "
    >
      <div className="w-full max-w-xl px-6">
        {/* TEXT */}
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Đăng ký{" "}
            <span className="text-blue-900">
              tư vấn miễn phí
            </span>
          </h2>

          <p className="mt-5 text-orange-100 text-lg">
            Nhận lộ trình học cá nhân hóa, kiểm tra trình độ miễn phí
            và cam kết đầu ra rõ ràng tại TEC.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Nguyễn Văn A"
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300
                  text-gray-900
                  outline-none
                  focus:ring-2 focus:ring-blue-900
                  focus:border-blue-900
                "
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số điện thoại
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="090xxxxxxx"
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300
                  text-gray-900
                  outline-none
                  focus:ring-2 focus:ring-blue-900
                  focus:border-blue-900
                "
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email (không bắt buộc)
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="
                  w-full p-3 rounded-lg
                  border border-gray-300
                  text-gray-900
                  outline-none
                  focus:ring-2 focus:ring-blue-900
                  focus:border-blue-900
                "
              />
            </div>

            {/* CTA */}
            <button
              type="submit"
              className="
                mt-4 bg-blue-900 hover:bg-blue-800
                text-white font-semibold
                py-3 rounded-xl
                transition
              "
            >
              Nhận tư vấn ngay
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              TEC cam kết bảo mật thông tin của bạn
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
