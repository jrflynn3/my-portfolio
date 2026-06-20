export default function Loading() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center pb-header md:pb-[calc(var(--spacing-header) * 2)]">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-secondary animate-pulse" />
        <div className="h-4 w-4 rounded-full bg-secondary animate-pulse [animation-delay:200ms]" />
        <div className="h-4 w-4 rounded-full bg-secondary animate-pulse [animation-delay:400ms]" />
      </div>
    </div>
  );
}
