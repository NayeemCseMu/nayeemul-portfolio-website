import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="section-label">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
