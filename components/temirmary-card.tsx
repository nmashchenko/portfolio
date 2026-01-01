export const TemirmaryCard = () => {
  return (
    <div>
      <img
        src="/mashka.jpg"
        alt="temirmary"
        className="aspect-square w-full rounded-sm object-cover"
      />
      <div className="my-4 flex flex-col">
        <p className="text-lg font-bold">@temirmary</p>
        <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
          我爱你
        </p>
      </div>
    </div>
  );
};