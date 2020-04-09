export class Patientvisits {
  constructor(
    public DiagnosisDate: string,
    public RevisitDate: string,
    public Pressure: string,
    public Diabetes: string,
    public Diagnosis: string,
    public Recommendations: [{ RecommendationName: string; }],
    public Medicines: [{ medicineName: string; medicineHowToUse: string; medicineForHowLong: string }],
    public Patient?: string,
    // public Doctor: string,
  ) {}
}
