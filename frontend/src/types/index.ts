export interface WordNode {
  id: string; word: string; language: string; meaning: string
  family: string; era?: string; x?: number; y?: number
}
export interface WordLink {
  source: string; target: string
  type: 'cognate' | 'derived' | 'borrowed' | 'reconstructed'
  description?: string
}
export interface CognateSet {
  root: string; meaning: string
  languages: Record<string, string>
  period: string; family: string
}
export interface LanguageFamily {
  id: string; name: string; color: string; languages: string[]; era: string
}
export interface DisputeViewpoint {
  theory: string
  proposedBy: string
  claim: string
  evidence: string[]
  divergence: string
}
export interface DisputedRoot {
  id: string; root: string; meaning: string; family: string
  status: '争议中' | '部分共识' | '主流接受'
  summary: string
  viewpoints: DisputeViewpoint[]
}
