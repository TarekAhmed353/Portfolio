"use client";

import { MotionConfig } from "motion/react";

// Skips the entrance and scroll animations for visitors who turned on
// "reduce motion" in their system settings.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
