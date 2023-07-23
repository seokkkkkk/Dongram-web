interface CategoryProps {
  props: string;
}

export function Category({ props }: CategoryProps) {
  return (
    <div className="bg-[#F2F4F8] backdrop-blur-[0.2rem] inline-flex justify-center place-items-center h-[1.8rem] px-3 rounded-[1.2rem] ml-[0.4rem] mt-[1rem]">
      <span className="text-[1.2rem] font-[400] leading-[140%]">{props}</span>
    </div>
  );
}
