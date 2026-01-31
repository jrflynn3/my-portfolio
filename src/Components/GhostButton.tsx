const GhostButton = ({ text }: { text: string }) => {
  return (
    <div className="border border-secondary/35 hover:bg-secondary hover:text-white rounded-md py-1.5 px-3 transition-colors delay-100 text-sm md:text-base">
      {text}
      <span className="pl-4">→</span>
    </div>
  );
};

export default GhostButton;
