"use client"

export function GoogleMapWidget(): JSX.Element {
  return (
    <div className="size-full">
      <iframe
        src={process.env.GOOGLE_MAPS_URL}
        width="100%"
        height="100%"
        style={{ borderRadius: "20px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa Google z lokalizacją przychodni wterynaryjnej ARKA w Bochni"
      />
    </div>
  )
}
