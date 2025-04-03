interface CheckBoxProps {
   checked : boolean;
   onChange :  () => void;
};

export const CheckBox = function({ checked, onChange } : CheckBoxProps) {
    return (
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          className="w-6 h-6 cursor-pointer appearance-none border-2 border-gray-800 rounded-md 
                  bg-white checked:bg-green-400 checked:border-gray-800 
                  checked:before:content-['✔'] checked:before:text-white
                  before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2"
          checked={checked}
          onChange={onChange}
        />
      </div>
    );
  };
  