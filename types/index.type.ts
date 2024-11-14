export type CorsOriginCallbackFunction = (err: Error | null, allow?: boolean) => void;
export type CorsOriginParam = string | undefined;

export interface StudentRegisterData {
    student_id: string | null;
    student_password: string | null;
    student_firstname: string | null;
    student_lastname: string | null;
}

export interface StudentAuthData {
    student_id: string | null;
    student_password: string | null;
}