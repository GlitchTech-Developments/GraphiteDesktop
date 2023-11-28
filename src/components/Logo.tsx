import { block } from "million/react-server";

const Logo = () => {
  return (
    <svg
      className="g-card-logo animate-spin-slow"
      viewBox="0 0 141 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m27.635 27.133 58.556-15.69 42.866 42.866-15.69 58.556-58.556 15.69-42.866-42.866 15.69-58.556zm17.607 86.616h50.518l25.259-43.75-25.259-43.75h-50.518l-25.259 43.75 25.259 43.75zm14.529-83.796 40.046 10.731 10.731 40.046-29.317 29.317-40.046-10.731-10.731-40.046 29.317-29.317z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default block(Logo);
