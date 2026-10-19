"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";

export default function ToasterProvider() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    const update = () =>
      setTheme(root.classList.contains("dark") ? "dark" : "light");

    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Toaster theme={theme} position="bottom-right" richColors closeButton />
  );
}