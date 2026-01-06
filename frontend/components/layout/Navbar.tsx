"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const navItems = [
  { name: "Trang chủ", href: "/" },
  { name: "Khóa học", href: "/courses" },
  { name: "Cơ sở vật chất", href: "/facilities" },
  { name: "Giáo viên", href: "/teachers" },
  { name: "Chi nhánh", href: "/branches" },
  { name: "Đề thi mẫu", href: "/tests" },
  { name: "Tuyển dụng", href: "/careers" },
]

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current > lastScrollY && current > 80) {
        setShow(false) // cuộn xuống → ẩn
      } else {
        setShow(true) // cuộn lên → hiện
      }

      setLastScrollY(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
        className={`
            fixed top-0 left-0 w-full z-50
            transition-transform duration-300
            ${show ? "translate-y-0" : "-translate-y-full"}
            bg-white/80 backdrop-blur-md
            border-b border-gray-200
        `}
        >
        <div className="max-w-7xl mx-auto h-16 px-8 flex items-center">
            
            {/* Logo – thụt vào */}
            <Link
            href="/"
            className="text-xl font-bold text-blue-900 mr-10"
            >
            TEC English
            </Link>

            {/* Spacer đẩy menu sang phải */}
            <div className="flex-1" />

            {/* Desktop menu – canh phải */}
            <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
                <Link
                key={item.name}
                href={item.href}
                className="
                    text-[15px] font-medium text-gray-700
                    hover:text-blue-800 transition
                "
                >
                {item.name}
                </Link>
            ))}

            {/* CTA */}
            <Link
              href="/register"
              className="
                ml-2 font-semibold
                text-orange-500
                border border-orange-400
                px-4 py-2 rounded-lg
                hover:bg-orange-500
                hover:text-white
                transition
              "
            >
              Đăng ký ngay
            </Link>

            </nav>

            {/* Mobile toggle */}
            <button
            className="lg:hidden text-2xl text-gray-700 ml-auto"
            onClick={() => setOpen(!open)}
            aria-label="Mở menu"
            >
            ☰
            </button>
        </div>

        {/* Mobile menu giữ nguyên */}
        </header>

  )
}
