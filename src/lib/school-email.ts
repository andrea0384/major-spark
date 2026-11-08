const SCHOOL_DOMAINS = ["mymdc.net"];

export function isSchoolEmail(email: string | undefined) {
  const domain = email?.split("@")[1]?.toLowerCase();
  return Boolean(domain && SCHOOL_DOMAINS.includes(domain));
}
