import React from 'react';
import { 
  Cpu, 
  Layers, 
  Container, 
  Database, 
  Brain, 
  Code, 
  Server, 
  Globe, 
  Box, 
  Zap,
  Terminal
} from 'lucide-react';
import { TechItem, Project } from './types';

export const TECH_STACK: TechItem[] = [
  // Brain
  { name: 'Python', category: 'Brain', icon: <Code className="w-5 h-5" /> },
  { name: 'Gemini', category: 'Brain', icon: <Brain className="w-5 h-5" /> },
  { name: 'Anthropic', category: 'Brain', icon: <Brain className="w-5 h-5" /> },
  { name: 'LangGraph', category: 'Brain', icon: <Layers className="w-5 h-5" /> },
  { name: 'Pytorch', category: 'Brain', icon: <Cpu className="w-5 h-5" /> },
  
  // Body
  { name: 'React', category: 'Body', icon: <Code className="w-5 h-5" /> },
  { name: 'Next.js', category: 'Body', icon: <Globe className="w-5 h-5" /> },
  { name: 'TypeScript', category: 'Body', icon: <Code className="w-5 h-5" /> },
  { name: 'Tailwind', category: 'Body', icon: <Box className="w-5 h-5" /> },
  
  // Infrastructure
  { name: 'AWS SA', category: 'Infrastructure', icon: <Server className="w-5 h-5" /> },
  { name: 'Docker', category: 'Infrastructure', icon: <Container className="w-5 h-5" /> },
  { name: 'Terraform', category: 'Infrastructure', icon: <Box className="w-5 h-5" /> },
  { name: 'Kafka', category: 'Infrastructure', icon: <Zap className="w-5 h-5" /> },
  { name: 'Redis', category: 'Infrastructure', icon: <Database className="w-5 h-5" /> },
  { name: 'Qdrant', category: 'Infrastructure', icon: <Database className="w-5 h-5" /> },
];

export const PROJECTS: Project[] = [
  {
    id: 'os-v2',
    title: 'OS_V2: Second Brain',
    category: 'Brain',
    status: 'Active',
    description: 'Semantic personal data warehouse with real-time ingestion.',
    tags: ['RAG', 'Gecko', 'Vector DB']
  },
  {
    id: 'factory-one',
    title: 'Factory_One',
    category: 'Infrastructure',
    status: 'Active',
    description: 'Auto-scaling Kubernetes deployment for GPU-bound workloads.',
    tags: ['K8s', 'Terraform', 'NVIDIA']
  },
  {
    id: 'vibe-shield',
    title: 'Vibe_Shield',
    category: 'Brain',
    status: 'Experimental',
    description: 'Autonomous guardrails for high-latency LLM agent loops.',
    tags: ['Agents', 'Security', 'Python']
  },
  {
    id: 'neural-interface',
    title: 'Neural_Interface',
    category: 'Body',
    status: 'Archived',
    description: 'Custom React-based HUD for monitoring distributed AI fleets.',
    tags: ['React', 'D3.js', 'WebSockets']
  }
];

export const NAV_ITEMS = [
  { label: 'Projects', href: '/projects' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Labs', href: '/labs' },
  { label: 'Pilot', href: '/pilot' },
];

export const PIPELINE_STEPS = [
  { label: 'VS Code Logs', icon: <Terminal className="w-6 h-6 text-slate-400" /> },
  { label: 'Node.js Stream', icon: <Code className="w-6 h-6 text-green-400" /> },
  { label: 'Vertex AI', icon: <Brain className="w-6 h-6 text-neon-blue" /> },
  { label: 'Qdrant Vector DB', icon: <Database className="w-6 h-6 text-orange-400" /> },
  { label: 'Plane PMS', icon: <Layers className="w-6 h-6 text-purple-400" /> },
];