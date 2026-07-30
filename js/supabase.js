const SUPABASE_URL = "https://mhzzvhuyyjssgejtttkf.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const BUCKET = "AGU LIBRARY";
const TABLE = "media";

console.log("Supabase loaded successfully");
