import { MouseEventHandler } from "react";

export interface customBtnProps {
  styles?: string;
  click? : MouseEventHandler<HTMLButtonElement>;
  title:string;
}

export interface userCommentProps{
  fullName:string,
  image?:string,
  comment:string,
}
export interface trainerCardProps{
  fullName:string,
  image?:string,
  course:string,
  modalLink?:string
}