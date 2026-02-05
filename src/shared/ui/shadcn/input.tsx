import * as React from 'react';

// import ReactCountryFlag from 'react-country-flag';
import { cn } from 'shared/lib';

export const PHONE_NUMBER_COUNTRIES = {
  US: { code: 'US', name: 'United States', dialCode: '+1' },
  CA: { code: 'CA', name: 'Canada', dialCode: '+1' },
  GB: { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
  DE: { code: 'DE', name: 'Germany', dialCode: '+49' },
  FR: { code: 'FR', name: 'France', dialCode: '+33' },
  IT: { code: 'IT', name: 'Italy', dialCode: '+39' },
  ES: { code: 'ES', name: 'Spain', dialCode: '+34' },
  JP: { code: 'JP', name: 'Japan', dialCode: '+81' },
  CN: { code: 'CN', name: 'China', dialCode: '+86' },
  IN: { code: 'IN', name: 'India', dialCode: '+91' },
  BR: { code: 'BR', name: 'Brazil', dialCode: '+55' },
  AU: { code: 'AU', name: 'Australia', dialCode: '+61' },
  RU: { code: 'RU', name: 'Russia', dialCode: '+7' },
  KR: { code: 'KR', name: 'South Korea', dialCode: '+82' },
  MX: { code: 'MX', name: 'Mexico', dialCode: '+52' },
};

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
