// Tipos para el proyecto Plannin-React

export interface PDDLDomain {
  name: string
  requirements: string[]
  types: string[]
  predicates: PDDLPredicate[]
  actions: PDDLAction[]
}

export interface PDDLPredicate {
  name: string
  parameters: PDDLParameter[]
}

export interface PDDLParameter {
  name: string
  type: string
}

export interface PDDLAction {
  name: string
  parameters: PDDLParameter[]
  precondition: string
  effect: string
}

export interface PDDLProblem {
  name: string
  domain: string
  objects: PDDLObject[]
  init: string[]
  goal: string
}

export interface PDDLObject {
  name: string
  type: string
}

export interface PlanStep {
  action: string
  parameters: string[]
  time?: number
}

export interface AnimationState {
  currentStep: number
  isPlaying: boolean
  speed: number
  plan: PlanStep[]
}

// Tipos para el planificador FF
export interface FFPlannerConfig {
  heuristic: 'hmax' | 'hadd' | 'hff'
  search: 'ehc' | 'best-first'
  timeout: number
}

export interface PlanningResult {
  success: boolean
  plan: PlanStep[]
  metrics: {
    time: number
    expanded: number
    evaluated: number
    generated: number
  }
  error?: string
}