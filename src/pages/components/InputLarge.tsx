interface Input {
  text: string;
  placeholder: string;
}

export default function InputLarge({ text, placeholder }: Input) {
  return (
    <div className="ml-[4rem] mb-10">
      <div className="mt-[0.8rem] mb-[1rem] text-[1.4rem]">{text}</div>
      <div className="w-[52rem] h-[4.8rem] bg-[#F2F4F8] border-b-[#C1C7CD] border-b-[0.1rem] flex place-content-center place-items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="w-[48.8rem] h-[2.2rem] text-[1.6rem] bg-transparent outline-none"
        />
      </div>
    </div>
  );
}