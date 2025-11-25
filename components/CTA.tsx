import { Button } from "./ui/Button";

export const CTA = () => {
  return (
    <div className="bg-purple-500/50 w-full h-40">
      <div className="flex flex-col h-full justify-center gap-4 items-center">
        <h2 className="font-subtitle">Jeste li spremni na probni trening?</h2>
        <Button className="ml-4" label="Prijavite se" />
      </div>
    </div>
  );
};
