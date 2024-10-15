import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eqxubnnlcurazatusryd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxeHVibm5sY3VyYXphdHVzcnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5OTIzNzUsImV4cCI6MjA0NDU2ODM3NX0.a4H1jYQN2ZPk2zqOvJbKLkBGAh2p28NkHgkRnsJt7gU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
