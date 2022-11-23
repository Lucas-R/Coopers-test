export type ButtonProps = {
  label: string,
  maxWidth?: number,
  height?: number | string,
  bgColor?: string,
  type?: string | undefined,
  radius?: number,
  onClick?: () => void,
}

export type ButtonStyleProps = {
  maxWidth?: number,
  height?: number
  bg: string | undefined,
  bRadius: number,
}
