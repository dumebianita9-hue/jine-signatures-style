import logo from "@/assets/logo-transparent.png";

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({ fullScreen = false, size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-16 w-auto",
    lg: "h-24 w-auto",
  };

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <img
        src={logo}
        alt="Loading..."
        className={`${sizeClasses[size]} animate-pulse`}
      />
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
        <span className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return content;
}
