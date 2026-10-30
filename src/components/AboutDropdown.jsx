"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 flex flex-col items-center">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="about-dropdown"
        className="flex items-center gap-1 text-lg text-blue-500 transition hover:underline"
      >
        Learn more about me.
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id="about-dropdown"
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-xl space-y-4 text-left text-base leading-relaxed">
            <p>
              I&apos;m a Software Engineering graduate (B.Sc., Adeleke
              University) and a full-stack developer who building
              practical, scalable end-to-end web applications.
            </p>

            <div>
              <h3 className="font-semibold">Stack</h3>
              <p>
                React, Next.js, Tailwind CSS, JavaScript on the frontend;
                Python (FastAPI), SQLAlchemy on the backend; PostgreSQL, MySQL
                and SQLite for databases.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Projects</h3>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <span className="font-medium">Allocatr:</span> hostel
                  allocation and QR-based clearance system with role-based
                  dashboards, JWT auth, and FCFS room allocation.
                </li>
                <li>
                  <span className="font-medium">Inventory Management System:</span>{" "}
                  full-stack CRUD app with secure authentication and a
                  documented REST API.
                </li>
                <li>
                  <span className="font-medium">Weather App:</span> responsive
                  real-time weather search powered by OpenWeatherMap.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}