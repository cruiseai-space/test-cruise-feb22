import { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
}

export interface TechItem {
  name: string;
  icon?: ReactNode;
  category: "Brain" | "Body" | "Infrastructure";
}

export interface Project {
  id: string;
  title: string;
  category: "Brain" | "Body" | "Infrastructure";
  status: "Active" | "Archived" | "Experimental";
  description: string;
  tags: string[];
}

export interface CaseStudyStep {
  id: string;
  label: string;
  description: string;
}

export interface CommandResponse {
  type: 'text' | 'link' | 'error';
  content: string;
  href?: string;
}