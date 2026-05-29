import { SITE_NAME } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-secondary/60 bg-accent">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <p className="text-center text-xs text-text-muted" suppressHydrationWarning>
          © {currentYear} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
