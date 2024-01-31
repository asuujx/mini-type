interface Props {
   value: number;
   onClick: (value: number) => void;
}

function Option({ value, onClick }: Props) {
   const handleKeyDown = (ev: React.KeyboardEvent<HTMLButtonElement>) => {
      if (ev.key === " ") {
         event?.preventDefault();
      }
   };

   return (
      <button
         onClick={() => onClick(value)}
         onKeyDown={handleKeyDown}
         className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
      >
         {value}
      </button>
   );
}

export default Option;
