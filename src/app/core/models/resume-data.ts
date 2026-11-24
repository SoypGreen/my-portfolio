export interface Contact {
    type: 'email' | 'github' | 'telegram' | 'VK';
    label: string;
    url: string;
}

export interface ResumeData {
    greeting: string;
    firstName: string;
    lastName: string;
    role: string;
    description: string;
    experience: Experience[];
    contacts: Contact[];
    tools: string[];
}

export interface Experience {
    company: string,
    role: string;
    period: string;
    description: string;
}
