type TextEclipseCenterProps = {
  text: string;
  minLength?: number;
};

export const textEclipseCenter = ({
  text = '',
  minLength = 0,
}: TextEclipseCenterProps) => {
  const textLength = text?.length ?? 0;
  if (textLength < minLength || !textLength) {
    return text;
  }
  const firstFour = !!text && text?.substring(0, 5);

  const lastFour = !!text && text?.substring(textLength - 4, textLength);

  return `${firstFour}........${lastFour}`;
};
