
export interface MucDoThanhThao {
  ten: string;
  kyHieu: string;
  moTa: string;
  nhiemVu: string;
  tuChu: string;
  lopApDung: string[];
}

export interface NangLucThanhPhan {
  ma: string;
  ten: string;
  moTa: string;
  chiSoTheoLop: Record<string, string[]>;
}

export interface MienNangLuc {
  ma: string;
  ten: string;
  moTaTongQuat: string;
  nangLucThanhPhan: NangLucThanhPhan[];
}

export interface KhungNLSData {
  thongTu: string;
  congVan3456: string;
  congVan405: string;
  mucDoThanhThao: Record<string, MucDoThanhThao>;
  mienNangLuc: MienNangLuc[];
}

export type SubjectType = 
  | 'Tin học' 
  | 'Toán' | 'Vật lý' | 'Hóa học' | 'Sinh học' | 'Khoa học tự nhiên'
  | 'Ngữ văn' | 'Tiếng Anh' | 'Lịch sử' | 'Địa lý' | 'GDCD' | 'Khoa học xã hội'
  | 'Công nghệ' | 'Âm nhạc' | 'Mỹ thuật' | 'Thể dục' | 'Hoạt động trải nghiệm và hướng nghiệp';

// New types for the AIOMT-style app
export interface ProcessingConfig {
  insertObjectives: boolean;
  insertMaterials: boolean;
  insertActivities: boolean;
  appendTable: boolean;
}

export interface GeneratedNLSContent {
  objectives_addition: string;
  materials_addition: string;
  activities_integration: Array<{
    anchor_text: string; // Text to find in the doc to insert after
    content: string;     // NLS content to insert
  }>;
  appendix_table: string; // Markdown or text for the table
}

export interface AppState {
  file: File | null;
  subject: SubjectType | '';
  grade: GradeType | '';
  isProcessing: boolean;
  logs: string[];
  config: ProcessingConfig;
  result: {
    fileName: string;
    blob: Blob;
  } | null;
}

// Fix: Added missing types for assessmentService.ts
export interface StudentRecord {
  hasHK1Data: boolean;
  kqhtHK1: string;
  kqrlHK1: string;
  absencesHK1: number;
  hasCNData: boolean;
  kqhtCN: string;
  kqrlCN: string;
  absencesCN: number;
}

export interface Assessment {
  hocTap: string;
  renLuyen: string;
}

export interface StudentAssessmentResponse {
  hk1: Assessment;
  caNam: Assessment;
}

export type GradeType = 
  | 'Lớp 1' | 'Lớp 2' 
  | 'Lớp 3' | 'Lớp 4' | 'Lớp 5' 
  | 'Lớp 6' | 'Lớp 7' 
  | 'Lớp 8' | 'Lớp 9' 
  | 'Lớp 10' | 'Lớp 11' | 'Lớp 12';

// Fix: Added missing MathSolution and related interfaces to fix the error in components/SolutionView.tsx
export interface MathStep {
  explanation: string;
  formula: string;
}

export interface GraphPoint {
  x: number | string;
  y: number;
}

export interface MathSolution {
  topic: string;
  problemSummary: string;
  graphData?: GraphPoint[];
  steps: MathStep[];
  finalAnswer: string;
}
