export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      nagy_requests: {
        Row: {
          created_at: string;
          id: number;
          ip_address: string | null;
          question: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          ip_address?: string | null;
          question?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          ip_address?: string | null;
          question?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
