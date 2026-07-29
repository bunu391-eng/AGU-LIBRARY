// =============================
// AGU LIBRARY - SUPABASE CONFIG
// =============================

const SUPABASE_URL = "https://mhzzvhuyyjssgejtttkf.supabase.co";

const SUPABASE_KEY = "sb_publishable_8LqYL8gJjbO1lmilUldIKw_QgQAGipY";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const BUCKET = "AGU LIBRARY";

const TABLE = "media";
