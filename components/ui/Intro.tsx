import Link from "next/link";

function Intro() {
  return (
    <p className="leading-7 mb-8">
      Full Stack Engineer who loves building marketplace apps and integrations.
      I currently work at&nbsp;
      <Link
        className="font-medium underline decoration-thinner underline-offset-2"
        href="https://www.revert.dev/"
      >
        Revert
      </Link>
      &nbsp;as generalist, having fun mentoring&nbsp;
      <Link
        className="font-medium underline decoration-thinner underline-offset-2"
        href="https://github.com/RocketChat/Apps.AI.GIF"
      >
        AI GIF Generator
      </Link>
      &nbsp;Project with Google&apos;s Summer of Code Program under{" "}
      <span className="font-medium">RocketChat</span>
    </p>
  );
}

export default Intro;
