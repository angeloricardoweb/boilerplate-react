type labelErrorProps = {
  errorMessage: string;
};

export function LabelError({ errorMessage }: labelErrorProps) {
  return (
    <label className="label">
      <span className="label-text-alt text-red-600">{errorMessage}</span>
    </label>
  );
}
