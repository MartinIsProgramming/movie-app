import { FC } from 'react';

interface Props {
  type: 'button' | 'reset' | 'submit';
  primary?: boolean;
  text?: string;
  textClassNames?: string;
  withIcon?: boolean;

  to?: string;
  iconElement?: React.SVGProps<SVGSVGElement>;
  className?: string;
  onClick?: () => void;
  disable?: boolean;
}

export const StandardBtn: FC<Props> = ({
  type,
  text,
  withIcon,
  iconElement,
  primary,
  className,
  textClassNames,
  onClick,
  disable,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      type={type}
      className={`rounded-xl font-poppins ${className} ${
        primary ? 'bg-[#192AC3]' : '"bg-transparent border  border-gray-400'
      }`}
    >
      <>
        <span className={textClassNames}>{text}</span>

        {withIcon && iconElement}
      </>
    </button>
  );
};
