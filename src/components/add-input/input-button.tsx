import { LucideIcon } from 'lucide-react';
import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../button';

type InputProps = Omit<ComponentProps<'input'>, 'onClick'>;
type ButtonProps = Pick<ComponentProps<'button'>, 'onClick'>;

type AddInputProps = ButtonProps &
  InputProps & {
    icon?: LucideIcon;
    buttonText?: string;
    onValueChange?: (value: string) => void;
    disabledButton?: boolean;
    errorMessage?: string;
  };

export const InputButton = forwardRef<HTMLInputElement, AddInputProps>(
  (
    {
      onClick,
      icon: Icon,
      buttonText = 'botão',
      onValueChange,
      onChange,
      disabledButton,
      errorMessage,
      className,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (onValueChange) onValueChange(e.target.value);
    };

    return (
      <div className="flex flex-col">
        <label
          aria-invalid={!!errorMessage}
          htmlFor="persons-input"
          className={cn(
            'rounded-4xl border-2 flex items-center overflow-hidden space-x-8 pl-8 max-w-2xl bg-white w-full input-shadow aria-invalid:border-red-600 ',
            className
          )}
        >
          {Icon && (
            <Icon className="flex-none fill-muted-foreground text-muted-foreground size-5" />
          )}

          <input
            ref={internalRef}
            id="persons-input"
            type="text"
            placeholder="Insira os nomes dos participantes"
            className="w-full py-4 focus-within:outline-0 text-sm overflow-ellipsis"
            onChange={handleChange}
            {...props}
          />

          <button
            data-testid="desktop-button"
            disabled={disabledButton}
            className="hidden sm:block rounded-r-2xl border-l text-sm py-5 px-12 cursor-pointer bg-muted-background text-button-text hover:bg-secondary hover:text-white transition-colors duration-300 disabled:pointer-events-none disabled:opacity-70 select-none"
            onClick={onClick}
          >
            {buttonText}
          </button>
        </label>

        {errorMessage && (
          <p role="alert" className="mt-2 ml-2 text-red-500 text-sm">
            {errorMessage}
          </p>
        )}

        <Button
          data-testid="mobile-button"
          disabled={disabledButton}
          onClick={onClick}
          variant="secondary"
          className="sm:hidden"
        >
          {buttonText}
        </Button>
      </div>
    );
  }
);

InputButton.displayName = 'InputButton';
