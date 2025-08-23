// components/NavigationButtons.js
import DecryptedText from '@/react-bits/DecryptedText';

const NavigationButton = ({ className, children, onClick, ...props }) => (
  <button
    className={`absolute hover:underline text-xs xs:text-sm md:text-lg font-bold transition-all duration-200 hover:scale-105 ${className}`}
    style={{ fontFamily: "var(--font-special_elite)" }}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

const NavigationButtons = ({ onInfoClick }) => {
  const buttons = [
    { 
      bText: '<Thoughts />', 
      position: 'bottom-20 xs:bottom-26 left-3 xs:left-6',
      onClick: () => console.log('Thoughts clicked')
    },
    { 
      bText: '<Projects />', 
      position: 'bottom-14 xs:bottom-20 left-3 xs:left-6',
      onClick: () => console.log('Projects clicked')
    },
    { 
      bText: '<Info />', 
      position: 'bottom-20 xs:bottom-26 right-3 xs:right-6',
      onClick: onInfoClick
    },
    { 
      bText: '<Contact />', 
      position: 'bottom-14 xs:bottom-20 right-3 xs:right-6',
      onClick: () => console.log('Contact clicked')
    },
  ];

  return (
    <>
      {buttons.map(({ bText, position, onClick }, i) => (
        <NavigationButton key={i} className={position} onClick={onClick}>
          <DecryptedText text={bText}/>
        </NavigationButton>
      ))}
    </>
  );
};

export default NavigationButtons;