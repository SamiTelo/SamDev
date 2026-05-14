"use client";

import BlobCursor from "@/components/BlobCursor";

export default function CursorProvider() {
  return (
    <BlobCursor
      blobType="circle"
      fillColor="#F75023"
      trailCount={2}
      sizes={[12, 16, 20]}
      innerSizes={[5, 7, 8]}
      innerColor="rgba(255,255,255,0.9)"
      opacities={[0.5, 0.3, 0.2]}
      shadowBlur={0}
      shadowOffsetX={0}
      shadowOffsetY={0}
      filterStdDeviation={8}
      useFilter={false}
      fastDuration={0.08}
      slowDuration={0.2}
      zIndex={9999}
    />
  );
}
