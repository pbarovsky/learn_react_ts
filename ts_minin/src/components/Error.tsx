interface ErrorProps {
  error: string;
}

export const Error = ({ error }: ErrorProps) => {
  return <p className="text-red-600">{error}</p>;
};
