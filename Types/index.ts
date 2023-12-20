import { MouseEventHandler } from "react";

export interface customBtnProps {
  styles?: string;
  click? : MouseEventHandler<HTMLButtonElement>;
  title:string;
}