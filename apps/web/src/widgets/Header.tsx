"use client";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className="flex items-center justify-between px-10 text-[20px]"
    >
      <h1 className="flex items-center gap-2">ADMIN</h1>
    </header>
  );
}
