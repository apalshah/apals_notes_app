export function formatDate(date, options = {}) {
    if (!date) return "";
  
    const defaultOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
  
    const formatter = new Intl.DateTimeFormat("en-US", {
      ...defaultOptions,
      ...options,
    });
  
    try {
      return formatter.format(new Date(date));
    } catch (error) {
      console.error("Invalid date passed to formatDate:", date);
      return "";
    }
  }