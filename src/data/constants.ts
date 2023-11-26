import { generateTimeOptions } from "@/lib/utils"

export const TIME_INTERVAL = 30
export const TIME_OPTIONS = generateTimeOptions(TIME_INTERVAL)

export const DAYS_OF_WEEK = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] satisfies string[]

export const DAY_MAPPINGS = {
  monday: "poniedziałek",
  tuesday: "wtorek",
  wednesday: "środa",
  thursday: "czwartek",
  friday: "piątek",
  saturday: "sobota",
  sunday: "niedziela",
}
