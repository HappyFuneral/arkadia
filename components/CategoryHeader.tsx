type Props = {
  title: string;
  description?: string;
};

export default function CategoryHeader({ title, description }: Props) {
  return (
    <div className="mb-10 bg-gradient-to-r from-zinc-900 to-black  p-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className="text-zinc-400 mt-2 max-w-xl">{description}</p>
      )}
    </div>
  );
}
