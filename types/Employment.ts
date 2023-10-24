// Project type
export interface Employment {
    id: number;
    employer: string;
    job_title: string;
    start_date: string;
    end_date?: string;
    logo?: string;
}