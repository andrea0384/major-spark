import { useEffect, useState } from "react";

export type Device = "phone" | "tablet" | "computer";

export function detectDevice(): Device {
  if (typeof window === "undefined") return "phone";
  const width = window.innerWidth;
  const ua = navigator.userAgent;
  const iPad = /iPad/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  if (width < 700) return "phone";
  if (iPad || (coarse && width < 1200)) return "tablet";
  return "computer";
}

export function useDevice(): Device {
  const [device, setDevice] = useState<Device>("phone");

  useEffect(() => {
    const apply = () => {
      const next = detectDevice();
      setDevice(next);
      document.documentElement.dataset.device = next;
    };
    apply();
    const pointer = window.matchMedia("(pointer: coarse)");
    window.addEventListener("resize", apply);
    pointer.addEventListener("change", apply);
    return () => {
      window.removeEventListener("resize", apply);
      pointer.removeEventListener("change", apply);
    };
  }, []);

  return device;
}

export function pageFrame(device: Device) {
  if (device === "tablet") {
    return {
      main: "min-h-screen bg-desk px-6 py-8 text-ink",
      sheet: "relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col rounded-page border border-rule bg-paper px-8 pt-16 pb-10 shadow-[0_18px_50px_rgba(60,51,40,0.12)]",
    };
  }
  if (device === "computer") {
    return {
      main: "min-h-screen bg-desk px-8 py-10 text-ink",
      sheet: "relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col rounded-page border border-rule bg-paper px-10 pt-16 pb-10 shadow-[0_18px_50px_rgba(60,51,40,0.12)]",
    };
  }
  return {
    main: "min-h-screen bg-desk text-ink",
    sheet: "relative mx-auto flex min-h-screen w-full max-w-none flex-col bg-paper px-5 pt-16 pb-8",
  };
}
