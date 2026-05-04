export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export type Error = {
  error: boolean;
  errorMessage: string | null;
};
