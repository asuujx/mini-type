interface Props {
   value: number;
   isActive: boolean;
   onClick: (value: number) => void;
}

function Option({ value, isActive, onClick }: Props) {
   return (
      <button
         onClick={() => onClick(value)}
         className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${
            isActive ? "bg-blue-500 text-white" : ""
         }`}
      >
         {value}
      </button>
   );
}

export default Option;
