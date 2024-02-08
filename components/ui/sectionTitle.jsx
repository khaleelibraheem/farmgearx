import Greenbar from "./greenbar";

export default function SectionTitle({ title }) {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-center mt-12">
        {title}
      </h1>
      <Greenbar />
    </div>
  );
}
