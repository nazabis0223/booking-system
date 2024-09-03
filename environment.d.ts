import "next"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
      NEXT_PUBLIC_APP_URL: string
      NEXTAUTH_URL: string
      AUTH_SECRET: string
      DATABASE_URL: string
      RESEND_API_KEY: string
      RESEND_EMAIL_FROM: string
      RESEND_EMAIL_TO: string
      GOOGLE_MAPS_URL: string
      GOOGLE_MAPS_API_KEY: string
    }
  }
}
