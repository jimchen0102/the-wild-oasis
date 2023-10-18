import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://poryvfohewyefivjswyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvcnl2Zm9oZXd5ZWZpdmpzd3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc0Njk5NTcsImV4cCI6MjAxMzA0NTk1N30.eWJGj5x57M9MDEDjEz9f0P_H5h_6mtYYk_dCjlOLnDI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
