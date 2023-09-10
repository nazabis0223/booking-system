import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

interface EnquiryNotificationForArkaProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
}

export default function EnquiryNotificationForArka({
  firstName,
  lastName,
  email,
  phone,
  message,
}: EnquiryNotificationForArkaProps) {
  const previewText = `${firstName} ${lastName} przesyła zapytanie z formularza kontaktowego>`

  return (
    <Html lang="pl">
      <Head>
        <title>Zapytanie z formularza kontatowego</title>
        <Preview>{previewText}</Preview>
      </Head>
      <Tailwind>
        <Body>
          {/* TODO */}
          Nowe zapytanie z formularza kontaktowego przeslane do przychodni ARKA
        </Body>
      </Tailwind>
    </Html>
  )
}
