export interface Student {
  id: number,
  name: string,
  status: string,
  late?: boolean,
  absentTo?: string[]
}