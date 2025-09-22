"use client";

import { useEffect, useState } from 'react';

export default function BookingIframe() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        className="w-full h-[600px] bg-gray-100 rounded-lg flex items-center justify-center"
        data-oid="booking-iframe-placeholder"
      >
        <div className="text-gray-500">Loading booking form...</div>
      </div>
    );
  }

  return (
    <iframe
      src="https://api.leadconnectorhq.com/widget/booking/VK5p3BfnXq2LNHpzyHj6"
      style={{
        width: "100%",
        border: "none",
        overflow: "hidden",
        minHeight: "600px"
      }}
      scrolling="no"
      id="lMDfsj2mw3xp7zT7dk9C_1758566156492"
      data-oid="booking-iframe"
    />
  );
}
