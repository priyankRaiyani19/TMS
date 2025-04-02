declare module "*.jpg";
declare module "*.png";
declare module '*.scss';
declare module '*.css';
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.css' {
  export const styles: { [key: string]: string }
}
