export interface PersonalityType {
  id: string;
  code: string;
  name: string;
  title: string;
  tagline?: string;
  description: string;
  image: string;
  color?: string;
  traits: { name: string; value: number }[];
  strengths: string[];
  weaknesses: string[];
  careerMatches: string[];
  relationships: string;
}

export interface TraitScore {
  left: string;
  right: string;
  score: number;
}

export interface TestResult {
  typeId: string;
  rawScores: Record<string, number>;
  traitScores: TraitScore[];
  timestamp: number;
}
