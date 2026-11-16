export interface ResumeData {
    greeting: string;
    firstName: string;
    lastName: string;
    role: string;
    description: string;
    experience: Experience[];
    contact: string;
}

export interface Experience {
    company: string,
    role: string;
    period: string;
    description: string;
}
