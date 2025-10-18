import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface WaitlistFormProps {
  variant?: "neon" | "neonAccent";
}

export const WaitlistForm = ({ variant = "neon" }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Welcome to the waitlist!", {
      description: "You'll receive early access when the city opens.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground"
      />
      <Button type="submit" variant={variant} disabled={isSubmitting} className="sm:w-auto">
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
