import { Aspirant } from "./aspirant"
import { House } from "./house"

export interface AdmissionRequest {
    admissionRequestId?: number
    aspirantId?: number
    houseId?: number
    startDate?: string
    endingDate?: string
    aspirant?: Aspirant
    house?: House
}