import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: "Polityka prywatności",
  description: "Polityka prywatności oraz klauzula RODO",
}

export default function PrivacyPolicyPage(): JSX.Element {
  return <div>Polityka prywatności i RODO</div>
}
